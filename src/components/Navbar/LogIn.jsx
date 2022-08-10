import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { createOrLog } from '../../Hooks/createOrLog';
import { contextoCarrito } from '../Main/Context/ContextCart'




export const LogIn = () => {
  const {setLogUser,userLog} = useContext(contextoCarrito)  
  const navigate =useNavigate();
  const [register,SetRegister] = useState(false);
    
  async function submitHandler(e){      
    await  createOrLog(e,register)
      .then (res => setLogUser(res)
            )

        .finally (
          navigate("/",{replace:true})
                  )    
    }


     

      console.log(userLog,"usuario en context");

  return (
    <div>
        <h1>{register? "Regístrate" : "Inicia sesión"}</h1>

        <form onSubmit={submitHandler}>
         {register?
         <>
        <input type="text"  id='nombre' name ="nombre" placeholder='nombre'  required />
        <input type="text"  id='direccion' name ="direccion" placeholder='Dirección'  required />
        <input type="email"  id='correo' name ="email" placeholder='Correo electronico'  required />
        <input type="password" id='password' name= "pw" placeholder='Contraseña'  required/>
        </>
        :
        <>
        <input type="email"  id='correo' name ="email" placeholder='Correo electronico'  required />
        <input type="password" id='password' name= "pw" placeholder='Contraseña'  required/>
        </>
        } 
         
          
            <button type='submit'> 
             {register? "Regístrate" : "Inicia sesión"}
            </button>
          
        </form>



        <button type='submit' onClick={()=> SetRegister(!register)}> 
        { register? "Ya tenes cuenta? Inicia sesion" : "No tenes cuenta ? Registrate ahora"}
        </button>
    </div>
   
  )
}
