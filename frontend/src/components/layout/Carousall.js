import React from 'react'
import bmw from './../../Images/car logo/icons8-bmw-48.png'
import jaguar from './../../Images/car logo/icons8-jaguar-48.png'
import mercedes from './../../Images/car logo/icons8-mercedes-48.png'
import volvo from './../../Images/car logo/icons8-volvo-48.png'
import audi from './../../Images/car logo/icons8-audi-48.png'
import landrover from './../../Images/car logo/icons8-land-rover-48.png'
import vintage from './../../Images/car logo/icons8-vintage-48.png'
import toyota from './../../Images/car logo/icons8-toyota-48.png'
import lexus from './../../Images/car logo/icons8-lexus-48.png'

const Carousall = () => {
    return (
        <>
            <div class="container">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                            <img src="https://i.pinimg.com/originals/eb/69/cd/eb69cda9dc03596673a6d6b3decf6cb2.png" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>BMW <img src={bmw} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item" >
                            <img src="https://i.pinimg.com/564x/c4/68/0d/c4680d483f99f2638c0d732b00a31998.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Jaguar <img src={jaguar} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/65/1d/d7/651dd71d0397049577ec08783153c4c7.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>RangeRover <img src={landrover} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/66/1d/b8/661db89854f956b5db354e751cddcdb3.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Volvo <img src={volvo} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/e3/9f/8e/e39f8e226424d6e1d753e5fd9fa3f844.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Fortuner <img src={toyota} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/b7/d3/13/b7d3139b0b0f5cf8a088325f58ce0cc2.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Lexus <img src={lexus} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/0a/7f/e7/0a7fe732596ecd8f9b206961fc9892ac.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Mercedes <img src={mercedes} alt=""/></h2>
                            </div>
                        </div>
                        
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/a4/7f/26/a47f264f7ebb7e690233c9682133d8dc.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Audi <img src={audi} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/fd/46/57/fd46573306a3d67fc9fcf785ce04f10f.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>BMW <img src={bmw} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/c2/23/8a/c2238a4ec90351359c3463097220ec85.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Audi <img src={audi} alt=""/></h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/64/9e/76/649e76dff84f5da5ffcf1c03d8766837.jpg" class="d-block w-100" alt="..." />
                            <div class="carousell" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <h2 style={{color:"rgb(251,0,75)"}}>Vintage <img src={vintage} alt=""/></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousall