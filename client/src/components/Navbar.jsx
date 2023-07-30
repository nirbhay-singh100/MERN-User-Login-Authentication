import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false);

    const handleLogout = async () => {
      try{
        const res = await fetch("http://localhost:5000/logout", {
            method: "POST",
            header: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }); 

        const data = res.json();
        
        window.alert("You've been succesfully logout");
        setIsLogin(false);
      } catch (error){
        console.log(error); 
      }
    }

    const checkLogin = async () => {
      try{
        const res = await fetch("http://localhost:5000/getUser", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
        })

        if(!res.status===200){
          const error = new Error(res.error);
          throw error; 
        }else{
          setIsLogin(true)
        }

      } catch (error){
        console.log(error);
      }
      
    }

    useEffect(()=>{
      checkLogin();
    },[]);

    return(
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary" >
          <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">MERN Authentication</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Me</Link>
          </li>
          {
            isLogin 
            ?
            <li class="nav-item">
            <Link class="nav-link" to="login" onClick={handleLogout}>Logout</Link>
            </li> 
            :
            <>
            <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="signup">Signup</Link>
          </li>
            </>
            
          }
          
          
          
        </ul>
    
      </div>
      </div>
        </nav>
      </div>
    )
}

export default Navbar;