function Header() {

    const arr = [
        { name: "Авоська", href: "/" },
        { name: "Авторизация", href: "/login" },
        { name: "Регистрация", href: "/registration" },
        { name: "Заказы", href: "/orders" },
        { name: "Создать заказ", href: "/create_order" },
        { name: "Админ панель", href: "/admin_panel" },
    ]

    return (
        <header className="w-full bg-slate-900 text-white text-2xl ">
            <nav className="flex justify-between p-5 container">
                {arr.map((item, index) =>
                    <a key={index} href={item.href} className="hover:scale-125 duration-500 ease-in-out hover:text-gray-400 hover:underline flex-none">{item.name}</a>
                )}
            </nav>

        </header>
    );
}

export default Header;