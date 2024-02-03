import React from 'react'
import restauranfood from '../icons_assets/restauranfood.jpg'
import '../css/Main.css';
import greeksalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemon from '../icons_assets/lemon dessert.jpg';
export default function Main() {
  return (
    <main>
      <section className='hero'>
          <div className='details'>
            <h1>Little Lemon</h1>
            <h3>India</h3>
            <p>We are a family owned Mediterranean restaurant, focused pm traditional recipies served with a modern twist.</p>
            <a href='#' className='book'>Reserve a Table</a>
          </div>
      </section>
      <img src={restauranfood} id='image' ></img>
      <section className='specials'>
        <div className='title'>
          <h1>This weeks specials!</h1>
          <a href='#' className='book'>Order Menu</a>
        </div>
        <div className='cards'>
          <div className='card1'>
            <img src={greeksalad}></img>
            <div>
              <h5>Green salad</h5>
              <h5 className='price'>$12.99</h5>
            </div>
            <p>The famous green salad of crispy lettuce,peppers,olives and our chicago style feta cheese gernished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className='card1'>
            <img src={bruchetta}></img>
            <div>
              <h5>Green salad</h5>
              <h5 className='price'>$12.99</h5>
            </div>
            <p>The famous green salad of crispy lettuce,peppers,olives and our chicago style feta cheese gernished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className='card1'>
            <img src={lemon}></img>
            <div>
              <h5>Green salad</h5>
              <h5 className='price'>$12.99</h5>
            </div>
            <p>The famous green salad of crispy lettuce,peppers,olives and our chicago style feta cheese gernished with crunchy garlic and rosemary croutons.</p>
          </div>
        </div>

      </section>

    </main>
  )
}
