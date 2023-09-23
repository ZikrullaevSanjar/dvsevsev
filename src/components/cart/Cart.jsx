import React, { useState } from 'react';
import "./Cart.scss";
import { BsCart3 } from 'react-icons/bs'
import {AiOutlineClose} from "react-icons/ai"
import { useSelector } from 'react-redux';


const Cart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const currentLangueTranslate = useSelector(
			state => state.langueageTarnslate.lang
		)

	const cartsProductItems = useSelector(state => state.cart.cartProduct)	
     

	console.log(cartsProductItems);

  return (
		<div className='main_cart'>
			<div className={isCartOpen ? 'cart cart--active' : 'cart'}>
				<div className='carts' onClick={() => setIsCartOpen(!isCartOpen)}>
					{' '}
				</div>
				<div
					className='block__cartToggle'
					onClick={() => setIsCartOpen(!isCartOpen)}
				>
					<BsCart3 className='cart-toggle' />
				</div>
				<AiOutlineClose
					className='close'
					onClick={() => setIsCartOpen(!isCartOpen)}
				/>
				<div className='main__product'>
					<div className='cart__title'>
						<h1 className='tittle_carts'>
							{currentLangueTranslate === 'uz' ? 'Саватга' : ' Корзинка'}
						</h1>
					</div>
					<div className='carts_itesm-view'>
						{cartsProductItems?.map(viewCarts => (
							<div className='carts__products'>
								<div className='img_cats'>
									<img src={viewCarts?.productImages} alt='' />
								</div>
								<div className='text__carts'>
									<h3>
										{currentLangueTranslate === 'uz'
											? viewCarts?.productName_uz
											: viewCarts?.productName_ru}
									</h3>
									<span>{'>'}</span>
									<b className='size__viewCart'>
										{viewCarts?.selectedType?.size}
									</b>
									<div className='card'>
										<button>-</button>
										<p>1</p>
										<button>+</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='messege__cart'>
						<div className='tittle__carst'>
							<h2>
								{currentLangueTranslate === 'uz' ? 'Cони: 1' : 'Каличество: 1'}
							</h2>
							<h1>{cartsProductItems?.[0]?.selectedType.price} СУМ</h1>
							<div className='form__input'>
							<form action="">
									<input type='text' placeholder={currentLangueTranslate === "uz" ? "Исмингиз ва Фамилиянгиз" : "Имя и Фамилия"}/>
									<input type='text' placeholder={currentLangueTranslate === "uz" ? "Телефон" : "Ракамингиз"}/>
							</form>
							<button className='btn__buy'>{currentLangueTranslate === "uz" ? "Буюртма бериш" : "Заказаты"}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart