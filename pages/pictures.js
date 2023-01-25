import { useState, useEffect } from 'react'
import Navbar from "../components/navbar_profile";
import { getSession } from "next-auth/react";

function Profile() {
  
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch('http://192.168.1.15:4000/displaycam')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <Navbar />
      {data ? data.map(data =>(
        
        <div style={{textAlign: 'center', margin: "50px 50px 50px 50px" }}>
          
          <img src ={`data:image/png;base64, ${data.data}`} style={{borderRadius: "10%"}}></img>
        </div>
          
      )) :(<p> Loading</p>)}
      
    </div>
  )
}


export default Profile;

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}