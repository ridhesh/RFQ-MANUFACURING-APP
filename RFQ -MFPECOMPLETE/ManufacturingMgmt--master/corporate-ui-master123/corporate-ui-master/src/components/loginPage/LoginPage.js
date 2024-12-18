import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";

const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let user = {
            username: e.target[0].value,
            password: e.target[1].value,
        };
        console.log(user);
        let login = true;
        await axios
        .post(`http://localhost:8083/getToken`, user)
        .then((res) => {
            localStorage.setItem("token", res.data.jwtToken);
        })
            .catch((err) => {
                console.log(err);
                login = false;
            });
        if (login === true) {
            navigate("/profile");
        } else {
            alert("wrong Credentials");

        }
    };
    return (
        <>
            <Header />
            <div className="d-flex align-items-center min-vh-100">
                <div class="container text-center">
                    <div class="shadow p-3 mb-5 mx-auto bg-white rounded w-50" >
                        <h2>Login</h2>
                        <form className="Login p-3" onSubmit={onLogin}>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">
                                    User ID:
                                </label>
                                <div class="col-sm-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEmail3"
                                        placeholder="Enter User Name"
                                        required minLength={3}
                                    ></input>
                                </div>
                            </div>
                            <div class="row mb-3 logdetails2">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">
                                    Password:
                                </label>
                                <div class="col-sm-12">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="inputPassword3"
                                        placeholder="Enter Password"
                                        required minLength={3}
                                    ></input>
                                </div>
                            </div>
                            <div className="btngrp">
                                <button class="btn btn-danger" type="submit">
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPage;