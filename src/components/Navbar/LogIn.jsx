import React,{useState} from 'react'
import { app } from '../../firebase/firebase';
import {getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithRedirect,
        GoogleAuthProvider
        } from "firebase/auth"





const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const LogIn = () => {

    const [register,SetRegister] = useState(false);

    async function submitHandler(e){
        e.preventDefault();
        const email = e.target.correo.value;
        const password = e.target.password.value;
        if(register){
            const usuario = await createUserWithEmailAndPassword(auth,email,password);
           
            console.log(usuario,"registrado")
        }else {
            signInWithEmailAndPassword(auth,email,password);
            console.log(auth,"usuario logeado?");
        }
       
        
    }


  return (
    <div>
        <h1>{register? "Regístrate" : "Inicia sesión"}</h1>

        <form onSubmit={submitHandler}>
          <input type="email"  id='correo' name ="email" placeholder='Correo electronico'  required />
          <input type="password" id='password' name= "pw" placeholder='Contraseña'  required/>
         
          
            <button type='submit'> 
             {register? "Regístrate" : "Inicia sesión"}
            </button>
          
        </form>


        <button type='submit' onClick={()=> signInWithRedirect(auth,googleProvider) }> Ingresar con google</button>

        <button type='submit' onClick={()=> SetRegister(!register)}> 
        { register? "Ya tenes cuenta? Inicia sesion" : "No tenes cuenta ? Registrate ahora"}
        </button>
    </div>
   
  )
}
