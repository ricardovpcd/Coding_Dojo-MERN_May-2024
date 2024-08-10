import { useState } from "react";
import styles from "./autenticacionPage.module.css";
import axios from "axios";

const AutenticacionPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmailName] = useState("");
    const [password, setPasswordName] = useState("");
    const [confirmPassword, setConfirmPasswordName] = useState("");

    const register = async () => {
        if(password != confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }

        var data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        };

        var response = await axios.post("http://localhost:8080/user/register", data);
    }

    return(
        <div>
            <div className={styles.registerContainer}>
                <h1>Register</h1>

                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>

                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>

                <label>Email</label>
                <input type="email" onChange={(e) => setEmailName(e.target.value)} value={email}/>

                <label>Password</label>
                <input type="password" onChange={(e) => setPasswordName(e.target.value)} value={password}/>

                <label>Confirm Password</label>
                <input type="password" onChange={(e) => setConfirmPasswordName(e.target.value)} value={confirmPassword}/>

                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default AutenticacionPage;