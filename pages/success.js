import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';

import{runFireworks} from'../lib/utils.js';



const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
   useEffect (()=> {
localStorage.clear();
setCartItems([]);
setTotalPrice(0);
setTotalQuantities(0);
runFireworks();

   }, []);
    return (
        <div className='success-wrapper'>
            <div className='success'>
<p className='icon'> 
<BsBagCheckFill>

</BsBagCheckFill>

</p>
<h2> Thank you for your order</h2>
<p className='email-msg'> Download the receipt</p>
<p className='description'>

    E-mail your queries
    <a className='email' href='mailto:abc@example.com'>
        yahoo@gmail.com
    </a>
</p>
<Link href="/">

<button type='button' width='300px' className='btn'>

    Continue Shopping
</button>

    </Link>


            </div>






        </div>
    )
}

export default Success