import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="card-container">

<Card
img="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
title="Beach House"
price="$120 night"
/>

<Card
img="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
title="Mountain Cabin"
price="$90 night"
/>

<Card
img="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
title="Modern Villa"
price="$200 night"
/>

</div>

<Footer/>
    </div>
  )
}
