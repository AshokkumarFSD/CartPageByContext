import React, { useContext, useState } from 'react';
import PlusIcon from '../assets/plus.svg'
import MinusIcon from '../assets/minus.svg'
import RemoveIcon from '../assets/remove.png'
import Collapsible from './Collapsible';
import { AppCxt } from '../context/AppContext';



const CartItem = ({ item,removeItem }) => {
    const { productsArray,setProductsArray } = useContext(AppCxt)

    const increaseQuantity = () => {
        item.quantity = item.quantity+1;

        const updatedArrray=[...productsArray];
        updatedArrray.forEach((element, index) => {
            if(element.id === item.id) {
                updatedArrray[index] = item;
            }
        });
        setProductsArray(updatedArrray);
    };

    let subTotal = item.price * item.quantity;

    const decreaseQuantity = () => {
        if (item.quantity > 1) {
            item.quantity = item.quantity-1;
            const updatedArrray=[...productsArray];
            updatedArrray.forEach((element, index) => {
                if(element.id === item.id) {
                    updatedArrray[index] = item;
                }
            });
            setProductsArray(updatedArrray);
        }
        else{
            alert("Quantity should atleast one 1, otherwise please use remove option")
        }
    };

    function removeAction()
    {
        removeItem(item);
    }

    return (
        <div className="cart-item bg-base-100  drop-shadow-2xl">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">

                <div className='item_details'>
                    <h4 className='card_title'>{item.title}</h4>
                    <Collapsible title="Description">
                        <p>{item.description}</p>
                    </Collapsible>
                    <Collapsible title="Details">
                        <p>Category: {item.category}</p>
                        <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>

                    </Collapsible>

                    <p>Price: ${item.price}</p>
                </div>


                <div className='cart_action'>
                    <div className='quan_sub_total'>
                        <div className="quantity-control">
                            <button className='quan_btn drop-shadow-md' onClick={decreaseQuantity}>
                                <img src={MinusIcon} alt="" />
                            </button>
                            <span>{item.quantity}</span>
                            <button className='quan_btn drop-shadow-md' onClick={increaseQuantity}>
                                <img src={PlusIcon} alt="" />
                            </button>
                        </div>
                        <p className='sub_total_text'>${subTotal.toFixed(2)}</p>
                    </div>
                    <div className='remove_sec drop-shadow-md' onClick={()=>{
                        removeAction();
                    }}>
                        <p className='remove_text'>Remove
                        </p>
                        <img  className='remove_icon' src={RemoveIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
