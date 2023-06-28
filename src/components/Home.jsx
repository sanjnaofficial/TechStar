import React from 'react'
import vg from "../assests/img7.jpg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <main>
        <h1>TechStar</h1>
        <p>Solution to your problems</p>
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          We provide optimal solutions to your tech problems. Leading tech company whose aim is to increase the problem solving ability.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illo quae fugiat tempora dolore laboriosam numquam a vitae eum earum, esse voluptatem mollitia et corrupti doloribus, iusto nostrum excepturi assumenda!</p>
      </div>
    </div>
    <div className="home4" id="brand">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home