const Validation = (userData, errors, setErrors) => {
    if(!userData.email){
        setErrors({...errors, email:'campo obligatorio vacio'})    
}
    else if(userData.email.length > 35){
        setErrors({...errors, email:'sobrepasa cantidad maxima de caracteres'})
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        setErrors({...errors, email:'email invalido'})
    }
    else {setErrors({ ...errors, email:''})}

    if(!/\d/.test(userData.password)){
        setErrors({...errors, password:'almenos un numero obligatorio'})
    }
    else if(userData.password.length<6 || userData.password.length>10){
        setErrors({...errors, password:'entre 6 y 10 caracteres obligatorios'})
    }
    else {
        setErrors({ ...errors, password:''})
    }
}   
export default Validation; 