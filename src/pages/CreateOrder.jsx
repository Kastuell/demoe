import { useState } from "react";
import Button from "../components/Button";

const CreateOrder = () => {

    const products = [
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
    ]

    const [cur, setCur] = useState()

    const [newOrder, setNewOrder] = useState([])

    return (
        <div>
            <h1 className="text-5xl">Создать заказ</h1>
            <div className="h-1 w-full border-t border-gray-400 mt-2" />
            <div className="mx-auto p-5">
                <ul className="flex flex-wrap gap-5">
                    {products.map((item, index) =>
                        <li key={index} item={index} className={`border p-2 ${index === cur && 'border-red-700 border-2'}`} onClick={() => setCur(index)}>
                            <h6 className="text-xl font-normal">{item.name}</h6>
                            <div className="relative max-w-48">
                                <img src={item.src} className="w-full h-full" />
                            </div>
                            <p>{item.price} &#8381;</p>
                            <Button title='Добавить' onClick={() => setNewOrder(prev => prev.concat(item))} />
                        </li>
                    )}

                </ul>
            </div>
            <div className="my-20 border p-5">
                <ul className="flex flex-wrap gap-5">
                    {newOrder?.map((item, index) =>
                        <li key={index} item={index} className={`border p-2`}>
                            <h6 className="text-xl font-normal">{item.name}</h6>
                            <div className="relative max-w-48">
                                <img src={item.src} className="w-full h-full" />
                            </div>
                            <p>{item.price} &#8381;</p>
                        </li>
                    )}
                </ul>
            </div>
            <Button title='Создать' onClick={() => alert('Новый заказ!')} />

        </div>
    )
}

export default CreateOrder;