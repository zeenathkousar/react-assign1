import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Child from './Child'
import StatePrac from './StatePrac'


class App extends React.Component{

   

  
  render(){
    return(

      <>
          <header>
        <img  id='logo' src="img1.avif" alt="logo"/>
        <nav>
            <ul>
                <li ><a href="">About</a></li>
                <li><a href="">Shine At Work</a></li>
                <li><a href="">Podcasts</a></li>
            </ul>
        </nav>
    </header>
    <div className="section1">
        <div className="leftdiv">
            <h2 className='text-success'>Daily Mental Wellness for all</h2>
            <p>The mental wellness app for better mornings,brighter days and the truest you.</p>
            <img  id="smallimg" src="img1.avif" alt=""/>
        </div>
        <div className="rightdiv">
            <img src="imgback.jpg" alt=""/>
        </div>
    </div>
    <div className="section2">
        <div className="section2left">
            <p>named best of the year Lorem, ipsum.</p>
            <h2>start your mental wellness journey with shine Lorem, ipsum.</h2>
            <div className="div1">
                <img src="img1.avif" alt=""/>
                <div className="div2">
                    <h2>Daily MEdications</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, magni?</p>
    

                </div>
            </div>
            <div className="div1">
                <img src="img1.avif" alt=""/>
                <div className="div2">
                    <h2>Daily MEdications</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, magni?</p>
    

                </div>


            </div>

            <div className="div1">
                <img src="img1.avif" alt=""/>
                <div className="div2">
                    <h2>Daily MEdications</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, magni?</p>
    

                </div>

            </div>

            <div className="div1">
                <img src="img1.avif" alt=""/>
                <div className="div2">
                    <h2>Daily MEdications</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, magni?</p>
    

                </div>

            </div>

        </div>
        <div className="section2right">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IcYeoqjZHhM?si=y1cUVHHqUOpY231B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>

    <div className="section3">
        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="divsection3">
            <img src="img1.avif" alt=""/>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <button className='btn btn-primary'>click</button>

    </div>

      </>
    )


  }
}

export default App
