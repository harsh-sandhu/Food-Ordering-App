import {Fragment} from 'react'
import images from '../../assets/showcase.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>MyFood</h1>
                <HeaderCartButton onclick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={images} alt="food"></img>
            </div>
        </Fragment>
    )
}
export default Header;