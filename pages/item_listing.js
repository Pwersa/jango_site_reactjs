import Job_Listing from "../components/item_listing";
import Navbar from "../components/navbar_listing";
import { getSession } from "next-auth/react";

function Home(){
    return(
        <div>
            <Navbar />
            <Job_Listing />
            
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