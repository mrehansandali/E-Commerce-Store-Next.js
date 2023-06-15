import React from 'react'
import Tshirtscss from "../styles/Tshirts.module.css"
import Image from 'next/image'


const Pants = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-4 my-3'>
                        <div className="container">
                            <div className="card">
                                <div className={Tshirtscss.setWidth}>
                                    <Image className={Tshirtscss.img_top} src="/pant.png" 
                                        width={500}
                                        height={500}
                                        alt="Picture" />
                                </div>
                                <div className="card-body mrcol">
                                    <h5 className="card-title">Lorem, ipsum dolor.</h5>
                                    <p className="card-text">PRICE <b>1200 PKR</b></p>
                                </div>
                            </div>
                        </div>
                    </div><div className='col-md-4 my-3'>
                        <div className="container">
                            <div className="card">
                                <div className={Tshirtscss.setWidth}>
                                    <Image className={Tshirtscss.img_top} src="/pant.png"
                                        width={500}
                                        height={500}
                                        alt="Picture" />
                                </div>
                                <div className="card-body mrcol">
                                    <h5 className="card-title">Lorem, ipsum dolor.</h5>
                                    <p className="card-text">PRICE <b>1200 PKR</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pants