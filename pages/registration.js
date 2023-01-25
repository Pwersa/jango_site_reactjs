import Register_Page from "../components/registration";
import Navbar from "../components/navbar_registration";
import { getSession } from "next-auth/react";

export default function Home(){
    return(
        <div>
            <Navbar />
            <Register_Page />
           
        </div>
    );
};

export async function getServerSideProps({req}) {
    const session = await getSession({req})
  
    if (!session) {
      return {
        props: { session }
      }
    }
  
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
