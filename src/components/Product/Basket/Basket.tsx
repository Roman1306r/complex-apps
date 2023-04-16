import { BasketProps } from "../../../models"
import {BsCartDash}  from 'react-icons/bs';
import {BsCartX}  from 'react-icons/bs';
import {AiOutlineClose}  from 'react-icons/ai';
import {MdOutlineRemoveShoppingCart}  from 'react-icons/md';
import {GiMoneyStack}  from 'react-icons/gi';



const Basket = ({setIsBasket, basket, addProperty, toggleIsCart} : BasketProps) => {


    const closeBasket = (event: React.MouseEvent<any>) => {
        event.preventDefault()
        setIsBasket(false)
    }


    const basketArray = basket.map(p => <div className="basket__item" key={p.id}>
      <div style={{textAlign: 'left'}}>
        <h3>{p.title}</h3>
        <h4>${p.price}</h4>
      </div>
      <button onClick={() => toggleIsCart(p.id)}><MdOutlineRemoveShoppingCart /></button>
      </div>)


  return (
    <div className='basket'>
        <a onClick={closeBasket} href="#" className="basket__close"></a>
        <div className="basket__body">
            <AiOutlineClose onClick={closeBasket} style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '30px'}} />
            <div className="basket__body-top">
              <h2>Basket</h2>
              {basket.length > 0 && <><button style={{marginRight: '20px'}} onClick={addProperty}><BsCartX /></button><button onClick={() => alert('В разработке!')}><GiMoneyStack /></button></>}
             </div>
            {basket.length > 0 ? <div className="basket__items">{basketArray}</div> : <BsCartDash style={{fontSize: '50px'}} />}
        </div>
    </div>
  )
}

export default Basket