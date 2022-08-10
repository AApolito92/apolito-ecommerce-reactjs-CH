import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { app,db } from '../firebase/firebase';
import { collection,addDoc,getDocs} from "firebase/firestore";

const auth = getAuth(app);



export const  getUser = async ()=>{

  let filtrado =[];
  try {
      const querySnapshot =await getDocs(collection(db,'usuarios'))
      const docs = []
      querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(),id:doc.id})
      })
      filtrado = docs.filter(el => el.email === auth.currentUser.email)
             
      
      console.log(filtrado,"array filtrado")

     } catch (error) {
      console.error("error");
     }

  return filtrado ;

}



export async function createOrLog(e,valorRegister){
  
    
  e.preventDefault(); 
  const email = e.target.correo.value;
  const password = e.target.password.value;

 
  if(valorRegister){
      await createUserWithEmailAndPassword(auth,email,password);  
      console.log("registrado")

      const user = {
        nombre:  e.target.nombre.value,
        email :  e.target.correo.value,
        direccion: e.target.direccion.value,
        registro:  (new Date()).toLocaleDateString("en-GB")
      }
      
      const orderColl = collection(db,"usuarios");
      addDoc(orderColl,user) 
      

      return  user;    
     
  }else {
     
       await signInWithEmailAndPassword(auth,email,password);
       const filtrado = getUser(email) ;
  
      console.log(auth,"usuario logeado?");
      console.log(email,"correo")
      console.log(filtrado,"filtrado funcion")
      
      return filtrado;
    
      
  }
 
  
}


