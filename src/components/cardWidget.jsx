import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


const CardWidget = () => {
    return (
        <div className='cart-widget'>
            <FontAwesomeIcon icon={faCartShopping} size="2x" color='black'></FontAwesomeIcon>

            <div className='cant-prod'>0</div>
        </div>
    );
}

export default CardWidget;
