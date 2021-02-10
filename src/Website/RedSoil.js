import React,{useEffect, useState} from 'react'
import WebsiteNav from './NavigationTab'
import {appfire } from '../Firebase';
import {Link} from 'react-router-dom'
import {useAuth} from '../context/Authcontext'
import copy from 'copy-to-clipboard'
const db = appfire.firestore()
export default function RedSoil() {
    const {currentUser} = useAuth()
    const [images, setImages] = useState({})
    const[arrow, setArrow] = useState(false)
    const [currentRadio, setCurrentRadio] = useState('')
    const [noImage,setNoImage] = useState(`Murti's not available now.....`)
    console.log(images)
    const bookername = process.env.REACT_APP_NAME
    const mobile = process.env.REACT_APP_MOBILE
    const copyToClipBoard = () =>{
        // setNumberText(true)
        const getNumber = mobile
        copy(getNumber)
    }
    useEffect(()=>{
        const getImages = []
        db.collection('ganpatiSamplesRed').onSnapshot(
            snapshot =>{
                snapshot.docs.forEach(image =>{
                    let currentID = image.id
                    let objData = {...image.data(), ['id']: currentID}
                    getImages.push(objData)
                })
                setImages(getImages)
            }
        )
    },[])
    const filterImages = value =>{
        setCurrentRadio(value)
        const searchedImages = []
        db.collection('ganpatiSamplesRed').where('Height','==',value).onSnapshot(
            snapshot =>{
                snapshot.forEach(image=>{
                    let currentID = image.id
                    let objData = {...image.data(), ['id']: currentID}
                    searchedImages.push(objData)
                })
                setImages(searchedImages)
            }
        )
    }
    const aboutme = ''
    const booking = ''
    const meetus = ''
    const contactus = ''
    const account = ''
    return (
        <div className='wedsiteshadubooking'>
            <WebsiteNav  aboutme={aboutme} booking={booking} meetus={meetus} contactus={contactus} account={account}/>
            <div className='container'>
                <div className='mainshadudivbooking'>
                <div className='filtersection'>
                                <div className='headderfilter'><h5>FILTER BY HEIGHT</h5></div>
                                <div className='filterprice'>
                                <div className={arrow?'arrowup':'arrowdown'}><i class="fa fa-sort-desc" aria-hidden="true" onClick={e=>setArrow(!arrow)}></i></div>
                                    <form>
                                        <div className={arrow?'filterheight':'filterheightHide'}>
                                            <div className='innerInput'><input type='radio' value='9' checked={currentRadio==='9'} onChange={e=>filterImages(e.target.value)}/><span>9 Inch Mutri</span></div>
                                            <div className='innerInput'><input type='radio' value='12' checked={currentRadio==='12'} onChange={e=>filterImages(e.target.value)}/><span>12 Inch Mutri</span></div>
                                            <div className='innerInput'><input type='radio' value='18' checked={currentRadio==='18'} onChange={e=>filterImages(e.target.value)}/><span>18 Inch Mutri</span></div>
                                            <div className='innerInput'><input type='radio' value='21' checked={currentRadio==='21'} onChange={e=>filterImages(e.target.value)}/><span>21 Inch Mutri</span></div>
                                            <div className='innerInput'><input type='radio' value='24' checked={currentRadio==='24'} onChange={e=>filterImages(e.target.value)}/><span>24 Inch Mutri</span></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='shaduimagewebsitemain'>
                                {images.length>0?
                                    <div className='shaduimageswebsite'>
                                            {
                                            images.map(image=>(
                                                <div className='card cardshaduwebsite shadow'>
                                                    <img className='websiteimage' src={image.Photo} alt={image.Model}/>
                                                    <div className='card-body'>
                                                        <div className='card-text'>
                                                            <div className='cardinfodiv'><p><span>Name:-</span><span>{image.Model}</span></p></div>
                                                            <div className='cardinfodiv'><p><span>Height:-</span><span>{image.Height}</span></p></div>
                                                        </div>
                                                        <div className='card-text cardtextbooking'>
                                                            <div className='cardinfodivprice'><p><span><i class="fa fa-inr" aria-hidden="true"></i></span><span>{image.Price}</span></p></div>
                                                            {/* <div className='bookingbtndiv'><button className='bookingbtn'>Book Now</button></div> */}
                                                            <div>{image.Soldout?<div className='soldoutweb'>Out Of Stock</div>:<div className='instockweb'>In Stock</div>}</div>
                                                        </div>
                                                        
                                                        <div className='bookingdetailsforuser'><p>For Booking Contact</p><p className='infowebsiteuser'><span onClick={copyToClipBoard}>{bookername}</span><span>{mobile}</span></p></div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>:
                                    <div>{noImage}</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
    )
}
