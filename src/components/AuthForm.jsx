import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function AuthForm(props) {

    const { title, inputs } = props

    const [data, setData] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        const temp = inputs.map(item => item.state)
        setData(temp)
        alert('Успешно!')
    }

    console.log(data)


    return (
        <form action="">
            <h1 className="text-5xl">{title}</h1>
            <div className="h-1 w-full border-t border-gray-400 mt-2" />
            <div className="w-1/2 mx-auto mt-10 space-y-8 border rounded-xl px-32 py-16">
                {inputs.map((item, index) =>
                    <Input
                        key={index}
                        title={item.title}
                        type={item.type}
                        value={item.state}
                        onChange={(e) => item.event(e.target.value)}
                    />
                )}
                <Button onClick={onSubmit} title={title === "Авторизация" ? "Войти" : "Зарегистрироваться"} />
            </div>
        </form>
    );
}

export default AuthForm;