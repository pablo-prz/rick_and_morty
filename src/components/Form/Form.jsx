import { useState } from "react";
import Validation from "./Validations";
import style from "./Form.module.css"

const Form = ({ login }) => {

    const [ userData, setUserData ] = useState({email:"", password:""});
    const [errors, setErrors] = useState({});

    const handleChange= (event) => {
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData, [property]:value})
        Validation({...userData, [property]:value}, errors, setErrors)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={style.container} onSubmit={handleSubmit}>
            <img src="https://2.bp.blogspot.com/-dlRpMrEjjjk/XNWIFIjCSEI/AAAAAAAAAg0/MRbuIU114ecZjEorfVqTZ2NC25m8f7PaACK4BGAYYCw/s1600/rick-and-morty-logo-png-5.png"></img>
            <div className={style.email}>
                <label className={style.text} htmlFor="email">Email</label>
                <input className={style.input} type="text" name= "email" value={userData.email} onChange={handleChange}/>
            </div>
            <div className={style.pass}>
                <label className={style.text} htmlFor="password">Passowrd</label>
                <input className={style.inputpw} type="text" name="password" value={userData.password} onChange={handleChange}/>
            </div>
            <button className={style.button} >Submit</button>
        </form>
    )
}

export default Form;