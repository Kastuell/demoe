const AdminPanel = () => {

    const orders = [
        {
            products: [
                {
                    name: 'Яблоки',
                    price: 400,
                    src: '/img/7.jpg',
                    quantity: 7
                },
                {
                    name: 'Хлеб',
                    price: 400,
                    src: '/img/4.jpg',
                    quantity: 7
                },
            ], adress: 'ул. Пушкина дом Колотушкина', user: { name: "Васильев Антон Владимирович", email: "test@mail.ru" }
        },
        {
            products: [
                {
                    name: 'Курица',
                    price: 400,
                    src: '/img/1.jpg',
                    quantity: 7
                },
                {
                    name: 'Яйца',
                    price: 400,
                    src: '/img/5.jpg',
                    quantity: 7
                },
            ], adress: 'ул. Пушкина дом Колотушкина', user: { name: "Иванов Иван Иванович", email: "test1@mail.ru" }
        },
    ]

    return (
        <div>
            <div className="flex gap-4 items-baseline">
                <h1 className="text-5xl">Админ панель</h1>
                <h2>Логин - sklad</h2>
                <h2>Пароль - 123qwe</h2>
            </div>
            <div className="h-1 w-full border-t border-gray-400 mt-2" />
            <div className="text-3xl">Все заказы</div>
            <div className="mx-auto p-5">
                {orders.map((item, index) =>
                    <div key={index} className="border p-5">
                        <div className="flex flex-col gap-5">
                            <h6 className="text-2xl">Заказ №{index + 1}</h6>
                            <p>{item.user.name}</p>
                            <p>{item.user.email}</p>
                        </div>
                        <hr className="my-2" />
                        <ul className="flex flex-wrap gap-5">
                            {item.products.map((it, ind) =>
                                <li key={ind} className="border p-2">
                                    <h6 className="text-xl font-normal">{it.name}</h6>
                                    <div className="relative max-w-48">
                                        <img src={it.src} className="w-full h-full" />
                                    </div>
                                    <p>{it.price} &#8381;</p>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AdminPanel;