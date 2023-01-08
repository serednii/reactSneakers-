
import React from 'react';
import Card from '../components/Card/Card';
import axios from 'axios';
function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const itemsOrders = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/orders");
                setOrders(itemsOrders.data.map((obj) => obj.items).flat());//збираємо всі закази в один масив
                console.log(itemsOrders.data);
                console.log(itemsOrders.data.map((obj) => obj.items).flat());
                console.log(itemsOrders.data.reduce((prev, obj) => [...prev, ...obj.items], []));
            } catch (error) {
                alert('Ошибка при запросе заказов');
            }
            setIsLoading(false);
        })()
    }, [])
    return (
        <div>
            <h1 className='orders__title'>Мої Закази</h1>
            <div className="orders">
                {!isLoading
                    ? (orders.map((e, i) => (
                        <Card key={"card" + i}
                            {...e}
                            Loading={isLoading}
                        />
                    ))) : (
                        [...Array(8)].map((e, i) => (
                            <Card key={"card" + i}
                                {...e}
                                Loading={true}
                                favorited={true}

                            />
                        ))
                    )


                }
            </div>
        </div>
    );
};

export default Orders;