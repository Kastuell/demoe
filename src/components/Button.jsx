const Button = (props) => {

    const { title, ...rest } = props

    return <button
        className="w-full text-2xl border rounded-lg px-2 py-2 bg-gray-100 hover:bg-gray-200 active:hover:bg-gray-100  duration-300 ease-in-out"
        {...rest}
    >{title}</button>
}

export default Button;