const productos = [
    {id:"01", name:"Sileno weed", detail:"w33d", img:"https://picsum.photos/200",stock:15},
    {id:"02", name:"Indoor gg", detail:"Indoor guegue",img:"https://picsum.photos/200",stock:7},
    {id:"03", name:"Critical Seeds", detail:"seed for grow",img:"https://picsum.photos/200", stock: 10},
    {id:"04", name:"Bongbastic", detail:"Bbbong",img:"https://picsum.photos/200", stock:5}
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