const productos = [
    {id: 1, name:"Sileno weed", detail:"W33d",  img:"https://picsum.photos/200",stock:15,precio:1500, categoria:"Plantas"},
    {id: 2, name:"Indoor gg", detail:"Indoor guegue", img:"https://picsum.photos/200",stock:7,precio:5000, categoria:"Indoor"},
    {id: 3, name:"Critical Seeds", detail:"Seed for grow", img:"https://picsum.photos/200", stock: 10,precio:700, categoria:"Seeds"},
    {id: 4, name:"Bongbastic", detail:"Bbbong", img:"https://picsum.photos/200", stock:0,precio:1500, categoria:"StonerStuff"},
    {id: 5, name:"Purple Haze Seeds", detail:"Purple Haze", img:"https://picsum.photos/200", stock:15,precio:750, categoria:"Seeds"},
    {id: 6, name:"Orange Flame Seeds", detail:"Orange Flame", img:"https://picsum.photos/200", stock:4,precio:1000, categoria:"Seeds"}

  ]

  export const getData = (categoriaId) => {
     return new Promise ((res, rej)=> {

     const productosFiltrados = productos.filter(producto => producto.categoria === categoriaId)
   setTimeout(() => {
    categoriaId ? res(productosFiltrados): res(productos);
   }, 1000);
  }) 
}


export const getDataProd = (id) => {
  return new Promise ((res, rej)=> {
    const productoFiltrado = productos.find((producto) => producto.id === +id);
setTimeout(() => {
  res(productoFiltrado);
}, 2000);
}) 
}
