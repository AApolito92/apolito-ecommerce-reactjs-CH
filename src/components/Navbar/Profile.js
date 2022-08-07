import React,{ useContext,useState,useEffect } from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import { collection,addDoc,getDocs} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app,db } from '../../firebase/firebase';




const auth  = getAuth(app);

export const Profile = () => {

const {setLogUser} = useContext(contextoCarrito)

//console.log(auth,"log auth profile")
const loggedUser = auth.currentUser;

 //encontrar datos
 const [userLogeado,setUserLogeado] = useState([]);
 useEffect(()=>{
    const getLista= async ()=>{
        try {
            const querySnapshot = await getDocs(collection(db,'usuarios'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            })
            const filtrado = docs.filter(el => el.mail === auth.currentUser.email)
            setUserLogeado(filtrado)         
            
            console.log(filtrado,"array filtrado")
        } catch (error) {
            console.log("error");
        }
    }
    getLista();     
},[])

setLogUser(userLogeado);
console.log(userLogeado,"userLogeadito");


const initialUser = {
    name:  "",
    mail: loggedUser.email,
    address:"",       
    uid:loggedUser.uid
    }

    console.log(initialUser,"user inicial");

    const [user, setUser] = useState(initialUser);

    const captureData = (e) => {
        e.preventDefault();
        const {name , value} = e.target ;
        setUser({...user,[name]:value})
        //console.log(user,"user profile");
      }

      const saveDataProfile = async(e) => {
        e.preventDefault();        
        const orderColl = collection(db,"usuarios");
        addDoc(orderColl,user)       
        console.log(user,"user despues de save")
           
      }

     



  return (
    <div>
        <h3>Datos personales</h3>

        <form onSubmit={saveDataProfile} >
          <input type="text" name ="name" placeholder='Nombre Completo' onChange={captureData} value={user.name}  required />
          <input type="email" name= "mail" placeholder='Correo electronico' onChange={captureData} value={user.mail} required/>
          <input type="text" name='address' placeholder='Dirección'  onChange={captureData} value={user.address} required/>
          <button type='submit'> Guardar datos</button>
        </form>
        <div>
        {userLogeado.map((items) => 
        <>
        <p>{items.name} </p>
        <p>{items.mail} </p>
        <p>{items.address} </p>
        </>
        )}
        </div>
        
    </div>
  )
}
