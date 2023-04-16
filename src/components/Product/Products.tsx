import {useEffect, useState} from 'react';
import { ProductsData } from '../../models';
import Product from "./Product/Product";
import SyncLoader from "react-spinners/SyncLoader";
import {BsCart4}  from 'react-icons/bs';
import Basket from './Basket/Basket';
import { getProductData } from '../../api/api';



const Products = () => {

    const [data, setData] = useState<ProductsData[]>([])
    const [load, setLoad] = useState(false)
    const [isBasket, setIsBasket] = useState(false)
    const [basket, setBasket] = useState<ProductsData[]>([])


    async function getProduct() {
        setLoad(true)
        const result = await getProductData()
        setData(result.products)
        setLoad(false)
    }
    const addProperty = () => {
        const newData: any = data.map(p => ({...p, isCart: false}))      
        setData(newData)
    }
    const deleteProduct = (id: number) => setData(data.filter(p => p.id !== id))
    const toggleIsCart = (id: number) => {
        let product: any = data.find(p => p.id === id)
        product = {...product, isCart: !product.isCart}
        let productIndex: number = data.findIndex(p => p.id === id)
        data.splice(productIndex, 1, product)
        setData([...data])
    }
    const addToBasket = () => {
        setBasket(data.filter(p => !!p.isCart))
    }




    useEffect(() => { 
        getProduct()
    }, [])
    useEffect(() => { 
        addProperty()
    }, [load])
    useEffect(() => { 
        addToBasket()
    }, [data])
 


    return <div className="password">
                    {load ? <SyncLoader size="30" color='#00de4e' margin={15}/> : <>
                    {!data.length 
                    ? <SyncLoader size="30" color='#00de4e' margin={15}/> 
                    : <div className='products'>
                        <button onClick={() => setIsBasket(true)} className='basket__icon'>
                            <BsCart4 />
                            {basket.length > 0 ?<span>{basket.length}</span> : null}
                        </button> 
                        {isBasket && <Basket toggleIsCart={toggleIsCart} addProperty={addProperty} basket={basket} setIsBasket={setIsBasket} />}
                        {data.map(p => <Product toggleIsCart={toggleIsCart} deleteProduct={deleteProduct} key={p.id}  {...p} />)}
                    </div>}    
                </>}  
            </div>
};

export default Products;