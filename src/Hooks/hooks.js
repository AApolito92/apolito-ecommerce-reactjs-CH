import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase/firebase';

const auth = getAuth(app);




export async function logOrCreate(e,valorRegister){
        
  e.preventDefault(); 
  const email = e.target.correo.value;
  const password = e.target.password.value;
  if(valorRegister){
      const usuario = await createUserWithEmailAndPassword(auth,email,password);  
      console.log(usuario,"registrado")
      let a ="/profile"
      return  a      
     
  }else {
     await signInWithEmailAndPassword(auth,email,password);
      console.log(auth,"usuario logeado?");
      console.log(auth.currentUser.email,"correo")
      let a ="/"
      return  a 
      
  }
 
  
}


