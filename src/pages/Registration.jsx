import { useState } from "react";
import AuthForm from "../components/AuthForm";

const Registration = () => {


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [second_name, setSecond_name] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const inputs = [
        { title: "Логин", type: "text", state: login, event: setLogin },
        { title: "Пароль", type: "password", state: password, event: setPassword },
        { title: "Фамилия", type: "text", state: surname, event: setSurname },
        { title: "Имя", type: "text", state: name, event: setName },
        { title: "Отчество", type: "text", state: second_name, event: setSecond_name },
        { title: "Телефон", type: "tel", state: phone, event: setPhone },
        { title: "Почта", type: "email", state: email, event: setEmail },
    ]

    return (
        <AuthForm
            title="Регистрация"
            inputs={inputs}
        />
    )
}

export default Registration;