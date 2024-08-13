import React, { useContext } from 'react';
import CartItem from './CartItem';
import { AppCxt } from "../context/AppContext"

function Cart() {
    const { productsArray, setProductsArray } = useContext(AppCxt)

    function removeItem(item) {
        const updatedArray = [];
        productsArray.forEach((element, index) => {
            if (element.id !== item.id) {
                updatedArray.push(element);
            }
        });
        setProductsArray(updatedArray);
    }

    return (
        <div className='cart-container'>
            <div className="cart-items">
                {productsArray.map(item => (
                    <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))}
            </div>
            {
                (productsArray.length > 0) ?
                    <div className='cart-total'>
                        <TotalComponent></TotalComponent>
                    </div> :
                    <EmptyComponent></EmptyComponent>
            }
        </div>
    );
};

function EmptyComponent() {
    return (
        <div className='no_items_container'>
            <div className='no_items drop-shadow-2xl'>
                <p>No Items found in cart. Reload the page again.</p>
            </div>
        </div>
    )
}


function TotalComponent() {
    const { productsArray } = useContext(AppCxt)
    let total = 0;
    let itemTotal = 0;
    let shipping = 0;
    console.log("array: ", productsArray);
    for (let index = 0; index < productsArray.length; index++) {
        let item = productsArray[index];
        let subTotal = item.price * item.quantity;
        itemTotal = itemTotal + subTotal;
    }
    shipping = shipping.toFixed(2);
    itemTotal = itemTotal.toFixed(2);
    total = (Number(shipping) + Number(itemTotal));

    return (<div className='total_container'>
        <div className='total_row'>
            <p className='total_row_heading'>Subtotal:</p>
            <p className='total_row_value'>${itemTotal}</p>
        </div>
        <div className='total_row'>
            <p className='total_row_heading'>Shipping:</p>
            <p className='total_row_value'>${shipping}</p>
        </div>
        <hr></hr>
        <div className='total_row'>
            <p className='total_amt_text'>Total:</p>
            <p className='total_amt_value'>${total.toFixed(2)}</p>
        </div>
    </div>)
}

export default Cart;