import Homepage from "../components/user_profile";
import Navbar from "../components/navbar_profile";
import { getSession } from "next-auth/react";

function Home(){
    return(
        <div>
            <Navbar />
            <Homepage />
           
        </div>
    );
};

export default Home;

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