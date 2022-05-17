import React from "react";
import product_card from '../data/product_data';


const BodyContent = () => {
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.currency}{item.price} Jt</p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );
    return (
        <div className="main_content">
            <h3>Game Console</h3>
            {listItems}
        </div>
    )
}

export default BodyContent;