export default function validateForm(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username = "Username required!";  
    }
    if(!values.email.trim()){
        errors.email = "Email required!";  
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid!";
    }
    if(!values.password.trim()){
        errors.password = "Password required!";  
    }else if(values.password.length < 6){
        errors.password = "Password need to be 6 characters or more!";  
    }
}