import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <section className='item-list-container'>
                <h2 className='item-list-container-tittle'>{greeting}</h2>

            </section>
        </div>
    );
}

export default ItemListContainer;
