import React from 'react'
import { Iproduct } from '../interface/product'

const CardProduct = (props: Iproduct): React.JSX.Element => {
    console.log(props)
  return (
    <div>
      <img src={props.image} alt="carddImage" />
    <div>
        <p>{props.title}</p>
        <p>Rp.{props.price}</p>
    </div>

    </div>
  )
}

export default CardProduct
