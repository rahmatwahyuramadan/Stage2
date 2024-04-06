import React from 'react'
import CardProduct from '../componen/cardProduct'
import { Iproduct } from '../interface/product'

   

const Product = () => {
    const [product, setProduct] = React.useState<Iproduct>({
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffood.detik.com%2Finfo-kuliner%2Fd-6438775%2F12-makanan-indonesia-paling-terkenal-yang-layak-dicicipi-turis&psig=AOvVaw0uYvNzENx8EBsgqqP_poeY&ust=1712112327886000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj_zfrBooUDFQAAAAAdAAAAABAE",
        price : "150.000.0000",
        title: "makanan"
    })


  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <CardProduct image={product.image} price={product.price} title={product.title}/>
    </div>
  )
}

export default Product
