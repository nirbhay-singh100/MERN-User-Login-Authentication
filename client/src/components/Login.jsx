import React,{useState} from "react";
import "../styles/Form.css";
import {Link, Navlink, useNavigate} from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setLoginDetails(prevValue => {
            return (
                {...prevValue,
                [name]: value}
            )
            
        })  
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {  email, password } = loginDetails;

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if(res.status===422 || res.status===401 || !data){
            window.alert("Invalid Credentials")
        }else{
            window.alert("Login succesfull");
            navigate("/");
        }

    }


    return (
        <div className="form-container">
            <h1>
                Start Your Journey !
            </h1>
            <form method="POST" onSubmit={handleSubmit}>
                
                <input type="email" name="email" id="" placeholder="Email" value={loginDetails.email} onChange={handleChange}/><br></br>
                <input type="password" name="password" id="" placeholder="Password" value={loginDetails.password} onChange={handleChange}/><br></br>
                
                <button tupe="submit">Login</button>
                <p>New user ?</p>
                <Link to="/signup">Register</Link>
            </form>
        </div>
    )
}

export default Login;