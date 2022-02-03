import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [viewPassword, setViewPassword] = useState(false)

    const login = () => {
        if (email !== "" && password !== "") {
            var result = validateEmail(email);
            if (result === true) {
                localStorage.setItem('user', email);
                props.history.push("/home");
            } else {
                toast.error('invalid email')
            }
        }
        else {
            toast.error('Mandatory fields cannot be blank')
        }
    }

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const getPassword = () => {
        setViewPassword(!viewPassword)
    }

    return (
        <div>
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h4 className="font-weight-bold">Login</h4>
                        <p className="font-weight-bold">Get asscess to your Orders, Wishlists and Recommendations</p>
                    </div>
                    <div className="col-md-6 login-form">
                        <form>
                            <div className="form-group emailGroup">
                                <input type="email" value={email} className="form-control inputField" id="loginemail" aria-describedby="emailHelp" placeholder="Your Email" onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="loginemail" className="emaillabel">Email</label>
                            </div>
                            <div className="form-group passwordGroup">
                                <span className="visiblePass" onClick={getPassword}>{viewPassword ? <FaEye /> : <FaEyeSlash />}</span>
                                <input type={viewPassword ? "text" : "password"} value={password} className="form-control inputField" id="loginpassword" placeholder="Your password" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="loginpassword" className="passwordlabel">Password</label>
                            </div>
                            <button type="button" className="btn btn-primary w-100 login-btn" onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
