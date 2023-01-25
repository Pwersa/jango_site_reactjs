import Change from "../components/change_password";
import Navbar from "../components/navbar_changepass";
import { getSession } from "next-auth/react";

function Home(){
    return(
        <div>
            <Navbar />
            <Change />
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