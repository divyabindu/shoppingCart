import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Register = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confrimPassword, setConfrimPassword] = useState("")

    const registerUser = () => {
        if (email !== "" && password !== "" && confrimPassword !== "" && firstName !== "" && lastName !== "") {
            var result = validateEmail(email);
            if (result === true) {
                if (password === confrimPassword) {
                    localStorage.setItem('user', email);
                    props.history.push("/home");
                } else {
                    toast.error('Password does not match!')
                }
            } else {
                toast.error('invalid email')
            }
        }
        else {
            toast.error('Mandatory fields cannot be blank')
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div>
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h4 className="font-weight-bold">Signup</h4>
                        <p className="font-weight-bold">We do not share your personal details with anyone.</p>
                    </div>
                    <div className="col-md-6 login-form">
                        <form>
                            <div className="form-group">
                                <input type="first" className="form-control inputField" placeholder="First Name" id="firstname" aria-describedby="emailHelp" onChange={e => setFirstName(e.target.value)} />
                                <label htmlFor="firstname" className="emaillabel">First Name</label>
                            </div>
                            <div className="form-group">
                                <input type="last" className="form-control inputField" placeholder="Last Name" id="lastname" aria-describedby="emailHelp" onChange={e => setLastName(e.target.value)} />
                                <label htmlFor="lastname" className="emaillabel">Last Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control inputField" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="exampleInputEmail1" className="emaillabel">Email</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control inputField" placeholder="Your Password" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="exampleInputPassword1" className="passwordlabel">Password</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control inputField" placeholder="Confirm Password" id="confirmpassword" onChange={e => setConfrimPassword(e.target.value)} />
                                <label htmlFor="confirmpassword" className="passwordlabel">Confirm Password</label>
                            </div>
                            <button type="button" className="btn btn-primary w-100 login-btn" onClick={registerUser}>Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
