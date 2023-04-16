import {MdClose}  from 'react-icons/md';
import {BiCartAdd}  from 'react-icons/bi';
import { ProductProps } from '../../../models';
import {MdOutlineRemoveShoppingCart}  from 'react-icons/md';


function Product({id, title, images, price, brand, description, rating, deleteProduct, toggleIsCart, isCart} : ProductProps) {

    


    return (
        <div className='product'>
            <div className='product-column'>
                <div className='product__image'><img src={images[0]} alt={title} /></div>         
                <div className='product-column-body'>
                    <MdClose onClick={() => deleteProduct(id)} className='delete' />
                    {isCart ? <MdOutlineRemoveShoppingCart onClick={() => toggleIsCart(id)}  className='card' /> : <BiCartAdd onClick={() => toggleIsCart(id)}  className='card' />}
                    <h2>{title}</h2>
                    <h3><span>Brand: </span> {brand}</h3>
                    <h4><span>Price: </span>$ {price}</h4>
                    <h3><span>Rating: </span> {rating}</h3>
                    <h3><span>Description: </span> {description}</h3>
                </div>
            </div>
        </div>
    );
}

export default Product;