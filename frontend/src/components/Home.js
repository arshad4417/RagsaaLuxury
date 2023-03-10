import React, { useEffect } from 'react'
import './Home.css'
import bmw from './../Images/car logo/icons8-bmw-48.png'
import maserati from './../Images/car logo/icons8-maserati-48.png'
import jaguar from './../Images/car logo/icons8-jaguar-48.png'
import mercedes from './../Images/car logo/icons8-mercedes-48.png'
import volvo from './../Images/car logo/icons8-volvo-48.png'
import cooper from './../Images/car logo/icons8-cooper-48.png'
import audi from './../Images/car logo/icons8-audi-48.png'
import landrover from './../Images/car logo/icons8-land-rover-48.png'
import vintage from './../Images/car logo/icons8-vintage-48.png'
import toyota from './../Images/car logo/icons8-toyota-48.png'
import porsche from './../Images/car logo/icons8-porsche-48.png'
import lexus from './../Images/car logo/icons8-lexus-48.png'
import Carousal from './layout/Carousal'
import Header from './layout/Header.js'
import Footer from './layout/Footer.js'
import Product from './ProductCard.js'
import MetaData from './layout/MetaData.js'
import { clearErrors, getProduct } from '../actions/productAction.js'
import { useSelector, useDispatch } from "react-redux"
import Loader from './layout/Loader.js'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import Carousall from './layout/Carousall'
import Carousalll from './layout/Carousalll'

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <>
      {loading ? (<Loader />) : (<><div className='hole'>
        <MetaData title='Ragsaa Luxury Car Rental - Home' />
        <Header />
        <div>
          <div className="home"><div className='shlogan'>The Perfect Car For Your Next Trip Is Just Around The Corner. <div className='shlogan1'> Book Your Drive Now !</div><div className='shlogan2'> <i className="fa-solid fa-phone"></i> 9461933266 For Book Immediately</div></div></div>
          
        </div>
        <div className='services'>
          <div class="s1" ><p  className='s11'>200+</p><p  className='s12'>Cars</p></div>
          <div class="s2"><p className='s11'>1500+</p><p className='s12'>Happy Customers</p></div>
          <div class="s3"><p className='s11'>50+</p><p className='s12'>Support Team</p></div>
          <div class="s5"><p className='s11'>24x7</p><p className='s12'>Car Booking Available</p></div>
        </div>
        <div className='services-nav'>
          <Link to="#helloworld1" class="s10"><button type="button" class="btn btn-outline-warning">Turiest Place</button></Link>
          <Link to="#helloworld2" class="s20"><button type="button" class="btn btn-outline-warning">Luxury Cars</button></Link>
          <Link to="#helloworld3" class="s30"><button type="button" class="btn btn-outline-warning">Customer Reviews</button></Link>
          <Link to="#helloworld4" class="s50"><button type="button" class="btn btn-outline-warning">Available Brands</button></Link>
        </div>
        <div className='services-mob'>
          <div class="s1"><p  className='s11'>200+</p><p  className='s12'>Cars</p></div>
          <div class="s2"><p className='s11'>1500+</p><p className='s12'>Happy Customers</p></div>
          <div class="s3"><p className='s11'>50+</p><p className='s12'>Support Team</p></div>
          <div class="s5"><p className='s11'>24x7</p><p className='s12'>Car Booking Available</p></div>
        </div>
        
        <Carousall/>
        <div class=""style={{display:"flex",justifyContent:"center",alignItems:"center"}}><button class="carousel" style={{backgroundColor:"rgba(128, 128, 128, 0.373)"}}type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel" type="button" style={{backgroundColor:"rgba(128, 128, 128, 0.373)"}} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button></div>
        <div className="item" style={{color:"rgb(255, 0, 75)"}}><h2>Featured Cars </h2></div>
        <div className="container" id='helloworld2' >
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
          <Link to="/products" style={{ display: "flex", textDecoration: "none", margin: "1vmax 0 5vmax 0" }}><button style={{ backgroundColor: "skyblue", borderRadius: "10px", padding: "0.5vmax" }}>More Cars</button></Link>
        </div>
        <div className="item" id='helloworld1' style={{color:"rgb(255, 0, 75)"}}><h2>Rajasthan Tour Packages</h2></div>
        <Carousalll/>
        <div className="item" id='helloworld3'  style={{color:"rgb(255, 0, 75)"}}><h2>Happy Customers Review </h2></div>
        <Carousal/>
        
        <div className="item" id='helloworld4'  style={{color:"rgb(255, 0, 75)"}}><h2>Available Car Brands</h2></div>

        <div className='categories'>
          <div class="c1" ><p  className='s111'>Mercedes <img src={mercedes} alt=""/></p></div>
          <div class="c2"><p className='s111'>Audi <img src={audi} alt=""/></p></div>
          <div class="c3"><p className='s111'>Fortuner <img src={toyota} alt=""/></p></div>
        </div>
        <div className='categories'>
          <div class="c1"><p  className='s111'>Volvo <img src={volvo} alt=""/></p></div>
          <div class="c2"><p className='s111'>Jaguar <img src={jaguar} alt=""/></p></div>
          <div class="c3"><p className='s111'>LandRover <img src={landrover} alt=""/></p></div>
        </div>
        <div className='categories'>
          <div class="c1"><p  className='s111'>MiniCooper <img src={cooper} alt=""/></p></div>
          <div class="c2"><p className='s111'>BMW <img src={bmw} alt=""/></p></div>
          <div class="c3"><p className='s111'>Maserati <img src={maserati} alt=""/></p></div>
        </div>
        <div className='categories'>
          <div class="c1"><p  className='s111'>Porsche <img src={porsche} alt=""/></p></div>
          <div class="c2"><p className='s111'>Vintage <img src={vintage} alt=""/></p></div>
          <div class="c3"><p className='s111'>Lexus <img src={lexus} alt=""/></p></div>
        </div>
        <Footer />
        </div></>
      )
      }</>
  )
}

export default Home