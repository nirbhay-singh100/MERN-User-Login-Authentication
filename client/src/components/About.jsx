import React, {useEffect, useState} from "react";
import "../styles/AboutMe.css"
import {useNavigate} from "react-router-dom";

const About = () =>{

    const navigate = useNavigate();
    const [name, setName] = useState("");

    const aboutUS = async () => {
        try{
            const res = await fetch("http://localhost:5000/about", {
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
            }

        } catch (error){
            console.log(error);
            navigate("/login");
        }
    }
    useEffect(()=> {
        aboutUS();
    },[])

    return (
        <div className="container-about">
            <h1>Hello {name} !</h1>
            <img src="https://res.cloudinary.com/dx6m1kdeg/image/upload/v1690619643/my_pic2_bhw69q.jpg" alt="my-image"  />
            <p>My name is Nirbhay Singh, I am studying CSE (2021-2025). I am learning about MERN development. I am more interested in the backend part of MERN development. I also have a very keen interest in Blockchain technology</p>
            <a href="https://github.com/nirbhay-singh100" target="_blank" ><i class="social-icon fab fa-github"></i></a>
            <a href="https://twitter.com/_n_s_mahan_" target="_blank" ><i class="social-icon fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/nirbhay-singh-657b27223/" target="_blank" ><i class="social-icon fab fa-linkedin"></i></a>
            <a href="mailto:nirbhaymahan100@gmail.com" target="_blank" ><i class="social-icon fas fa-envelope"></i></a>
            
            
            
        </div>
    )
}

export default About;