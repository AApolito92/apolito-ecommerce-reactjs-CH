import React,{useState} from 'react'
import { app } from '../../firebase/firebase';
import {getAuth,        
        signInWithRedirect,
        GoogleAuthProvider
        } from "firebase/auth"
import { logOrCreate } from '../../Hooks/hooks';
import { useNavigate } from 'react-router-dom';



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const LogIn = () => {

    
    const navigate =useNavigate();
    const [register,SetRegister] = useState(false);
    
    async function submitHandler(e){      
    await  logOrCreate(e,register)
    .then (res => navigate(res,{replace:true}))
     
      }


      function submitGoogle (){
      signInWithRedirect(auth,googleProvider)
        navigate("/",{replace:true})
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


        <button type='submit' onClick={submitGoogle }> Ingresar con google</button>

        <button type='submit' onClick={()=> SetRegister(!register)}> 
        { register? "Ya tenes cuenta? Inicia sesion" : "No tenes cuenta ? Registrate ahora"}
        </button>
    </div>
   
  )
}
