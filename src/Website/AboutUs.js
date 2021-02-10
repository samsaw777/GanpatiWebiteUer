import React,{useEffect, useState} from 'react'
import WebsiteNav from './NavigationTab'
import ShaduGanpati from '../Images/Shadu.jpg'
import PaperGanpati from '../Images/Paper.jpg'
import Lalmati from '../Images/Lalmati.jpg'
import {Link} from 'react-router-dom'
import loadingVideo from '../Images/Shree Ganesha Arts Video.mp4'
import copy from 'copy-to-clipboard'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Accounts from 'twilio/lib/rest/Accounts'
require('dotenv').config()
export default function AboutUs() {
    const[numberText, setNumberText] = useState(false)
    const aboutme = 'about'
    const booking ='book'
    const meetus = 'meet'
    const contactus = 'contact'
    const map = 'mapus'
    const account = 'accounts'
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            once: true,
        })
    }, [])
    const phonenumber = process.env.REACT_APP_MOBILE
    console.log(process.env)
    const email = process.env.REACT_APP_EMAIL
    const address = process.env.REACT_APP_ADDRESS
    const copyToClipBoard = () =>{
        // setNumberText(true)
        const getNumber = phonenumber
        copy(getNumber)
    }

    const OpenMail = ()=>{
        setNumberText(true)
        const getNumber = email
        copy(getNumber)
    }
    return (
        <>
        <WebsiteNav aboutme={aboutme} booking={booking} meetus={meetus} contactus={contactus} account={account}/>
        <div className='aboutusmaindiv'>
            <div className='container'>
                <div className='videoDiv'>
                    <video controls>
                        <source src={loadingVideo} type='video/mp4'/>
                    </video>
                </div>
                {/* <div className='aboutinfoimg' id={aboutme}>
                    <div className='aboutusheader'><h3>About Us</h3></div>
                    <div><p>Hii, I am shushant joshi. I am a JJ student garaduate and I am making ganpati idols since 2000.
                    My prime object is to make idols eco-friendly and also give the customer a fine art.I make idols from <strong>Shadu Mati</strong>, <strong>Lal Mathi</strong> and <strong>Paper Mache</strong>.</p></div>
                </div> */}

            </div>
        </div>
        <div className='bookingdivabout' id={booking}>
            <div className='container'>
                <div className='websitebookingheading'><h6>Want To Buy</h6><h3>We’ve Got Some Great Deals</h3></div>
                <div className='bookingmaindiv'>
                    <div className='bookingitem shadow-lg' data-aos='fade-right'>
                        <p className='pone'>Shadu Ganpati</p>
                        <p className='ptwo'><img src={ShaduGanpati} art='shaduganpati'/></p>
                        <Link to='/shaduganpati'><div className='card-btn'><button>View Murti's</button></div></Link>
                    </div>
                    <div className='bookingitem shadow-lg' data-aos='fade-down'>                        
                        <p className='pone'>Paper Ganpati</p>
                        <p className='ptwo'><img src={PaperGanpati} art='shaduganpati'/></p>
                        <Link to='/paperganpati'><div className='card-btn'><button>View Murti's</button></div></Link>
                    </div>
                    <div className='bookingitem shadow-lg' data-aos='fade-left'>                        
                        <p className='pone'>Red Soil Ganpati</p>
                        <p className='ptwo'><img src={Lalmati} art='shaduganpati'/></p>
                        <Link to='/redganpati'><div className='card-btn'><button>View Murti's</button></div></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='workingTime' id={meetus}>
            <div className='container'>
                <div className='workingTimeHeading'>
                    <h6>Want To Meet Us</h6>
                    <h3>Working Time</h3>
                </div>
                <div className='workingTimeDiv' data-aos='flip-left'>
                    <div className='TimeDiv'>
                        <p><span>Monday</span><span>11AM to 6PM</span></p>
                        <p><span>Tuesday</span><span>11AM to 6PM</span></p>
                        <p><span>Wednesday</span><span>11AM to 6PM</span></p>
                        <p><span>Thursday</span><span>11AM to 6PM</span></p>
                        <p><span>Friday</span><span>11AM to 6PM</span></p>
                        <p><span>Saturday</span><span>Closed</span></p>
                        <p><span>Sunday</span><span>Closed</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='contactUs' id={contactus}>
            <div className='container'>
            <div className='contactheading'>
                <h6>Stay In Touch</h6>
                <h3>Contact Us</h3>
            </div>
            <div className='contactusinfo'>
                <div className='phonenumberabout' data-aos='fade-right'><i class="fa fa-phone-square" aria-hidden="true"></i><a href='#contact' onClick={copyToClipBoard}>{phonenumber}</a></div>
                <div className='phonenumberabout' data-aos='fade-down'><i class="fa fa-map-marker" aria-hidden="true"></i><a href='#map'><p className='addresspara'>{address}</p></a></div>
                <div className='phonenumberabout' data-aos='fade-left'><i class="fa fa-envelope" aria-hidden="true"></i><a href='#contact' onClick={OpenMail}>{email}</a></div>
            </div>
            <div className='copytoclipboardmessage' style={{textAlign: 'center', fontWeight: 'bold'}}><p>Click to copy to clipboard.</p></div>
            </div>
                </div>
        <div className='mapDiv' id={map} data-aos='zoom-out'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.474329396987!2d72.81373216473209!3d19.21814893700646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b152a7271db7%3A0x733f6644c3511e57!2sKandivali%2C%20Sector%208%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1609756494092!5m2!1sen!2sin" width='100%' height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
        <div className='linkaccount' id={account}>
                <div className='linkicons'>
                    <p className='iconslink'>
                    <a href='https://www.facebook.com/Shree-Ganesha-Art-Mumbai-1643721589193207/'><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href='https://www.instagram.com/p/CKHbBCdp8NS/?igshid=al5xa3n9t1u7'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    {/* <a href='https://www.facebook.com/Shree-Ganesha-Art-Mumbai-1643721589193207/'><i class="fa fa-twitter" aria-hidden="true"></i></a> */}
                    </p>
                </div>
        </div>
        </>
    )
}

