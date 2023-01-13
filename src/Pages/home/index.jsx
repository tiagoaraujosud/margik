import React from 'react';
import './styles.css';
import back from './img/back.webp';
import skull1 from './img/products/skull1.webp';
import skull2 from './img/products/skull2.webp';
import bat from './img/products/bat.webp';
import boo from './img/products/boo.webp';

function Home() {
  return (
    <div className='home'>
      <div className='text'>
        <div className='box'>
          <div class="form">
            <h2>The world's first fully recyclable light-up cards and stickers. Shop our unique and sustainable festive sticker deals while supplies last! Orders will be shipped by October 1st.</h2>
            <img src={back} alt="" />
          </div>
          
        </div>
      </div>
      
      <div> <h1>See our products</h1> </div>

      <div className='products'>
        
        <div className='product'>
          <a href="#"><img src={skull1}></img></a>
          <h5>OLED Dia de Muertos Ignasi Sticker - Sigle</h5>
        </div>

        <div className='product'>
          <a href="#"><img src={skull2}></img></a>
          <h5>OLED Dia de Muertos Fior Sticker - Sigle</h5>
        </div>

        <div className='product'><a href="#">
          <img src={bat}></img></a>
          <h5>OLED Dia de Muertos Bat Sticker - Sigle</h5>
        </div>

        <div className='product'><a href="#">
          <img src={boo}></img></a>
          <h5>OLED Dia de Muertos Ghost Sticker - Sigle</h5>
        </div>

        <div className='product'>
          <a href="#"><img src={skull1}></img></a>
          <h5>OLED Dia de Muertos Ignasi</h5>
        </div>

        <div className='product'>
          <a href="#"><img src={skull1}></img></a>
          <h5>OLED Dia de Muertos Ignasi</h5>
        </div>

        <div className='product'>
          <a href="#"><img src={skull1}></img></a>
          <h5>OLED Dia de Muertos Ignasi</h5>
        </div>

      </div>

    </div>
      
  )
}

export default Home;