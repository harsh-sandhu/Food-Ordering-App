import classes from './Modal.module.css'
import {Fragment} from 'react'
const Backdrop=(props)=>{
    return <div onClick={props.onclick} className={classes.backdrop}/>
}
const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal=(props)=>{
    return<Fragment>
        <Backdrop onclick={props.onBackdropClick}/>
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
}
export default Modal;