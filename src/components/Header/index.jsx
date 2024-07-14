function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div className="headerInfo">
                    <h3>React Sneakers</h3>
                    <p>магазин кросовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img src="/img/cart.svg" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    );

}

export default Header;