import Homepage from "../components/homepage_logged_in";
import Navbar from "../components/navbar_homepage_loggedin";

function Home(){
    return(
        <div>
            <Navbar />
            <Homepage />
        </div>
    );
};

export default Home;