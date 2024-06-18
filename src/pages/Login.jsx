import { useState } from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const inputs = [
        { title: "Логин", type: "text", state: login, event: setLogin },
        { title: "Пароль", type: "password", state: password, event: setPassword },
    ]

    return (
        <AuthForm
            title="Авторизация"
            inputs={inputs}
        />
    )
}

export default Login;