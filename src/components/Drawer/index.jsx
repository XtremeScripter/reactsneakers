function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="items">
                    <h2>Корзина</h2>
                    <div className="cartItem">

                        <img height={70} width={70} src="/img/sneakers/1.jpg" alt="Sneakers"></img>

                        <div>
                            <p>Мужские кроссовки</p>
                            <b>12 999р.</b>
                        </div>

                        <img src="/img/btn-remove.svg" alt="Remove" className="removeBtn" />

                    </div>

                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="ButtonBuy" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;