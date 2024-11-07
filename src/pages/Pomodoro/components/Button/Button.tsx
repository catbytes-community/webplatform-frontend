
import style from "./Button.module.css"


// returns a button
// title of the button
// when is active or not
// click event -> function

const Button = ({title, activeClass, _callback}: {title:string, activeClass:any, _callback:any}) =>{
    return(
        <button className={`${style.button} ${activeClass}`} onClick={_callback}>{title}</button>
    )
}

export default Button;