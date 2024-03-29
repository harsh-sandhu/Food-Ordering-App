import {useContext} from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'
const Cart=(props)=>{
    const cartCtx= useContext(CartContext);
    const totalAmount=`Rs.${cartCtx.totalAmount.toFixed(2)}/-`;
    const hasItems=cartCtx.items.length>0;
    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler=item=>{
        cartCtx.addItem(item);
    };
    let cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map(item=>{
        return<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
    })}</ul>
    return <Modal onBackdropClick={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                {hasItems&&<button className={classes.button}>Order</button>}
            </div>
   </Modal>
}
export default Cart;