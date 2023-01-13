import React from 'react';
//import './styles.css';
import back from './img/back.png';

function Home() {
  return (
    <div className='container'>
        <div>
            <h4>The world's first fully recyclable light-up cards and stickers. Shop our unique and sustainable festive sticker deals while supplies last! Orders will be shipped by October 1st.</h4>
        </div>
        <div className='img'>
            <img src={back} alt="" />
        </div>
        
    </div>
      
  )
}

export default Home;