import Homepage from "../components/homepage_logged_in";
import Navbar from "../components/navbar_homepage_loggedin";
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