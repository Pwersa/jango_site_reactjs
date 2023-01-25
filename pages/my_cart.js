import My_Cart from "../components/my_cart";
import Navbar from "../components/navbar_cart";
import { getSession } from "next-auth/react";

function Home(){
    return(
        <div>
            <Navbar />
            <My_Cart />
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