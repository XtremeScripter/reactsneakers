function Card() {
    return (
        <div className="card">
            <div className="favourite">
              <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={133} src="/img/sneakers/1.jpg" alt="Item" />
            <p>Мужские кроссовки Nike Balance</p>
            <div className="cardBottom">
              <div>
                <p>Цена:</p>
                <b>12 999р.</b>
              </div>
              <button>
                <img height={11} width={11} src="/img/plus.svg" alt="  Plus" />
              </button>
            </div>
          </div>
    );
}

export default Card;