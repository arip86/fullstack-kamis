
import { useContext } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { AuthContext } from "../context/AuthContext";

function Home (){
    const {token} = useContext(AuthContext);
    return(
        <>
      
        <Hero/>
{token? (
        <Movies/>
      ) : (
        <p style={{textAlign: "center"}}>Silahkan Login terlebih dahulu </p>
      )}
        </>
    )
}

export default Home;