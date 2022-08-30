import '../css/login.css';
import Logo from '../images/logo.png'
import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';

function Login() {

    let navigate = useNavigate();
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState('');

    function inputAuth() {
        if (login == 'test' && password == 'mvp') {
            document.cookie = "user=test";
            navigate('/')
        } else {
            setErrorMsg('Логин или пароль введены неверно')
        }

    }

    return (
        <div className="loginTheme">

            <img className="loginLogo"
                 src={Logo}/>

            <div className="box login">
                <div>
                    <h2>Авторизация</h2>
                    <input
                        type="text"
                        className="inputBtn"
                        tabIndex="1"
                        placeholder="Username"
                        onChange={event => setLogin(event.target.value)}

                    />
                    <input
                        type="password"
                        className="inputBtn"
                        tabIndex="1"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}

                    />
                    {errorMsg.length>0 ?
                    <p
                        id="errorMsg"
                        className="error-msg"> {errorMsg}
                    </p>
                        : null
                    }

                        <div
                            id="login-btn"
                            className="btn btn-login"
                            onClick={inputAuth}
                        >
                            Войти
                        </div>



                </div>
            </div>

        </div>
    )
}

export default Login;