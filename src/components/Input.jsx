function Input(props) {

    const { id, title, type, ...rest } = props

    return (
        <div className="relative w-full font-normal">
            <label htmlFor={id} className="absolute z-50 -top-4 left-4 bg-white px-1 text-xl">{title}</label>
            <input className="relative w-full outline-none z-0 px-2 py-2 border border-black rounded-lg" type={type} name={title} id={id} {...rest} />
        </div>
    );
}

export default Input;