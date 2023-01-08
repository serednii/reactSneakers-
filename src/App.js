//json-server -p 3001 --watch sn.json

import React from 'react';
import axios from 'axios';
// https://www.figma.com/file/dVigu7NU5iCIhXQ7P18mnf/React-Sneakers-(Copy)?node-id=0%3A1&t=C5Ov3CuVRQULaKOJ-0import React from 'react';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Edit from './components/Edit/Edit';
import Added from './components/Added/Added';
import Deleted from './components/Deleted/Deleted';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import { Route } from 'react-router-dom';
import AppContext from './context';
import { makeid } from './hooks/makeId';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isEditCart, setIsEditCart] = React.useState(false);
  const [isAddedCart, setIsAddedCart] = React.useState(false);
  const [textClearCart, setTextClearCart] = React.useState('');
  const [textClearOrders, setTextClearOrders] = React.useState('');
  const [textClearFavorites, setTextClearFavorites] = React.useState('');
  const [isChangeImage, setChangeImage] = React.useState('');
  const [isChangeDescription, setIsChangeDescription] = React.useState('');
  const [isChangePrice, setIsChangePrice] = React.useState('');



  const funSetIsEditCart = (obj) => {
    setChangeImage('');
    setIsChangeDescription("");
    setIsChangePrice("");
    setIsEditCart(obj);
  }




  // console.log(makeid(10));
  const setIsAddedCartSave = async () => {
    console.log(!(isChangeImage !== "images/sneakers/"));
    if (!isChangeDescription || !(isChangeImage !== "images/sneakers/") || !isChangePrice) {
      alert("Заповніть всі поля");
    } else {
      const obj = {
        title: isChangeDescription,
        urlImage: isChangeImage,
        price: Number(isChangePrice),
        parentId: makeid(10)
      }
      try {
        const { data } = await axios.post("https://635d74d2ea764497f0dd237e.mockapi.io/sneakers", obj);
        alert(`Товар успішно додано  id = ${data.id}  parentId = ${data.parentId} `)
      } catch (error) {
        alert("Не вдалося добавити новий товар")
      }
    }

  }

  const setIsEditCartSave = (obj) => {
    isChangeImage && (obj.urlImage = isChangeImage);
    isChangeDescription && (obj.title = isChangeDescription);
    isChangePrice && (obj.price = Number(isChangePrice));

    const f = async () => {
      try {
        const { data } = await axios.put(`https://635d74d2ea764497f0dd237e.mockapi.io/sneakers/${obj.id}`, obj);
        setItems((prev) => {
          const newPrev = prev.map(e => {
            if (e.id === data.id) {
              e.id = data.id;
              e.parentId = data.parentId;
              e.title = data.title;
              e.urlImage = data.urlImage;
              e.price = data.price;
            }
            return e;
          });
          return newPrev;
        });
        alert(`Дані про товар  змінено  id = ${data.id}  parentId = ${data.parentId} `)
      } catch (error) {
        alert("Не удалось добавить в cart");
      }
    }

    f();
  }

  // **********************************************************************************************
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [itemsRespons, cartResponse, favoritesRespons] = await Promise.all([
          axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/sneakers"),
          axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/cart"),
          axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/favorites")
        ])
        //const itemsRespons = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/sneakers");
        //const cartResponse = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/cart");
        //const favoritesRespons = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/favorites");
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesRespons.data);
        setItems(itemsRespons.data);
      } catch (error) {
        alert('Ошибка при загрузке с сервера');
      }

    };

    fetchData();
    // axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/sneakers").then((res) => {
    //     setItems(res.data);
    //   })

    //   axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/cart").then((res) => {
    //     setCartItems(res.data);
    //   })

    //   axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/favorites").then((res) => {
    //     setCartItems(res.data);
    //   })
    // axios.get("http://localhost:3001/sneakers").then((res) => {
    //   setItems(res.data);
    // })


    // axios.get("http://localhost:3001/cart").then((res) => {
    //   // console.log(res.data)
    //   setCartItems(res.data);
    // })

    // axios.get("http://localhost:3001/favorites").then((res) => {
    //   // console.log(res.data)
    //   setFavorites(res.data);
    // })

  }, []);
  // **********************************************************************************************


  React.useEffect(() => {
    // console.log(isEditCart);
  }, [isEditCart]);


  // **********************************************************************************************
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // **********************************************************************************************

  // **********************************************************************************************
  const onDeleteToCart = async (id, resourse) => {
    console.log(`index  ${id}`);
    console.log(`index  ${resourse}`);

    if (resourse === "cart") setCartItems(prev => prev.filter((e, i) => id !== e.id));
    else if (resourse === "sneakers") setItems(prev => prev.filter((e, i) => id !== e.id));

    try {
      const { data } = await axios.delete(`https://635d74d2ea764497f0dd237e.mockapi.io/${resourse}/${id}`);
      console.log(data)
    } catch (error) {
      alert(`Ошибка при удалении ${resourse} на сервере`);
    }

  }
  // **********************************************************************************************

  // **********************************************************************************************
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  // **********************************************************************************************

  // **********************************************************************************************
  const onAddToFavorite = async (obj) => {
    if (favorites[0]) {
      console.log(favorites);
      console.log(obj);
    }
    try {
      if (favorites.find(e => e.parentId === obj.parentId)) {
        const { id } = favorites.find(e => e.parentId === obj.parentId);
        await axios.delete(`https://635d74d2ea764497f0dd237e.mockapi.io/favorites/${id}`)
        setFavorites((prev) => prev.filter((item) => item.parentId !== obj.parentId));
        console.log('DELETED');
      } else {
        const { data } = await axios.post("https://635d74d2ea764497f0dd237e.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
        console.log('ADDED');
      }
    } catch (error) {
      alert("Не удалось добавить в Фаворіте");
    }
  }
  // **********************************************************************************************

  // **********************************************************************************************
  const onAddToCart = async (obj) => {
    if (cartItems[0]) console.log(cartItems[0]);
    try {
      if (cartItems.find(e => e.parentId === obj.parentId)) {
        const { id } = cartItems.find(e => e.parentId === obj.parentId);
        await axios.delete(`https://635d74d2ea764497f0dd237e.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter((item) => item.parentId !== obj.parentId));
        console.log('DELETED');
      } else {
        const { data } = await axios.post("https://635d74d2ea764497f0dd237e.mockapi.io/cart/", obj);
        setCartItems((prev) => [...prev, data]);
        console.log('ADDED');
      }
    } catch (error) {
      alert("Не удалось добавить в Фаворіте");
    }
  }
  // **********************************************************************************************

  // **********************************************************************************************
  const clearOrders = async () => {
    try {
      const { data } = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/orders");
      console.log(data.id);
      for (let i = 0; i < data.length; i++) {
        await axios.delete("https://635d74d2ea764497f0dd237e.mockapi.io/orders/" + data[i].id);
        setTextClearOrders(`Deleted obj  ${i + 1}`);
        await delay(200);
      }
      setTextClearOrders('');

    } catch (error) {
      alert('Error deleted object in Orders')
    }
  };
  // **********************************************************************************************

  // **********************************************************************************************
  const clearCart = async () => {
    try {
      const { data } = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/cart");
      console.log(data);
      for (let i = 0; i < data.length; i++) {

        await axios.delete("https://635d74d2ea764497f0dd237e.mockapi.io/cart/" + data[i].id);
        setTextClearCart(`Deleted obj  ${i + 1}`);
        await delay(200);
      }
      setTextClearCart('');
      setCartItems([]);
    } catch (error) {
      alert('Error deleted object in cart')
    }
  };
  // **********************************************************************************************

  // **********************************************************************************************
  const clearFavorite = async () => {
    try {
      const { data } = await axios.get("https://635d74d2ea764497f0dd237e.mockapi.io/favorites");
      console.log('data');
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        await axios.delete("https://635d74d2ea764497f0dd237e.mockapi.io/favorites/" + data[i].id);
        setTextClearFavorites(`Deleted obj  ${i + 1}`);
        await delay(200);
      }
      setTextClearFavorites('');
      setFavorites([]);
    } catch (error) {
      alert('Error deleted object in favorite')
    }
  };
  // **********************************************************************************************

  // ******************************************************************************************
  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isChangeImage,
      isChangeDescription,
      isChangePrice,
      isEditCart,
      isAddedCart,
      isLoading,//
      onChangeSearchInput,//
      setIsAddedCartSave,
      setCartItems,
      setIsFavorite,
      onDeleteToCart,
      setIsDeleted,
      setIsEditCart,
      setIsEditCartSave,
      setChangeImage,
      setIsChangeDescription,
      setIsChangePrice,
      funSetIsEditCart,
      setIsAddedCart,
      onAddToFavorite,//
      onAddToCart,//
      searchValue, //
      setSearchValue//
    }}>
      <div className='wrapper'>

        {<div className={`${'overlay'} ${cartOpened ? 'overlayVisible' : ''}`} >
          <div className='draverLeft' onClick={() => setCardOpened(false)}></div>
          <Drawer
            key="drawer" items={cartItems}
            onClose={() => setCardOpened(false)}
            opened={cartOpened}
            delay={delay}
          />
        </div>
        }

        <Header key="header" onClickCart={() => { setCardOpened(true) }} />
        {isDeleted && <Deleted key="deleted" obj={isDeleted} />}
        {isEditCart && <Edit key="edit" obj={isEditCart} setIsEditCart={setIsEditCart} />}
        {isAddedCart && <Added key="added" />}
        <hr className='line' ></hr>

        <div className="servisButtons">
          <button onClick={() => console.log(items)}>Items</button>
          <button onClick={() => console.log(cartItems)}>cartItems</button>
          <button onClick={() => console.log(favorites)}>favorites</button>
          <button onClick={() => console.log(clearOrders())}>{textClearOrders ? textClearOrders : 'Clear mockapi Orders'}</button>
          <button onClick={() => console.log(clearCart())}>{textClearCart ? textClearCart : 'Clear mockapi Cart'}</button>
          <button onClick={() => console.log(clearFavorite())}>{textClearFavorites ? textClearFavorites : 'Clear mockapi Favorite'}</button>
        </div>

        <img className='slider' src="images/slider.jpg" alt='slider' />
        <div className='content'>
          <Route path="/Favorites" exact>
            <Favorites
              fun={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
            />
          </Route>

          <Route path="/Orders" exact>
            <Orders key="orders" />
          </Route>

          <Route path="/" exact>
            {/* <Route path="/" > */}

            <Home key="home" />
          </Route>
        </div>
      </div >
    </AppContext.Provider>

  )

  // **********************************************************************************************

}

export default App;
