import React,{useState, useEffect} from "react";
import "../styles/Home.css"

const Home = () =>{

    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const homeContent = async () => {
        try{
            const res = await fetch("http://localhost:5000/getUserData", {
                method: "GET",
                header: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if(res.status!==200){
                const error = new Error(res.error);
                throw error; 
            }
            else{
                setName(data.firstName);
                setIsLogin(true);
            }

        } catch (error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        homeContent();
    },[])

    return (
        <div className="container-home">
            <h3>{isLogin? `Welcome ${name}`: 'Hello !' }</h3>
            <h1>{isLogin ? 'Glad to se you back !' : "Start Your Journey"}</h1>
        </div>
    )
}

export default Home;