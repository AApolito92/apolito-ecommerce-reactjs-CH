const productos = [
    {id:"01", name:"Sileno weed", detail:"w33d",  img:"https://picsum.photos/200",stock:15,precio:1500, categoria:"Plants"},
    {id:"02", name:"Indoor gg", detail:"Indoor guegue", img:"https://picsum.photos/200",stock:7,precio:5000, categoria:"Indoor"},
    {id:"03", name:"Critical Seeds", detail:"seed for grow", img:"https://picsum.photos/200", stock: 10,precio:700, categoria:"Seeds"},
    {id:"04", name:"Bongbastic", detail:"Bbbong", img:"https://picsum.photos/200", stock:5,precio:1500, categoria:"Accessories"}
  ]

  export const getData = new Promise ((res, rej)=> {
    let condition = true ;

    setTimeout(()=>{
       if (condition) {
      res(productos)
    } else {
      rej(console.log("bad"))
    }
    },3000)
  }) 


