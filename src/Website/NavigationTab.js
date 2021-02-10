import React,{useState} from 'react'
import './navigation.css'
import {useAuth} from '../context/Authcontext'
import {useHistory,Link} from 'react-router-dom'

export default function NavigationTab({aboutme,booking,meetus,contactus,account}) {
    // console.log(aboutme.length)
    const menuItems = [
        // {
        //     name:'About us',
        //     url:`${aboutme}`,
        //     Aclassname:'active'
        // },
        {
            name:'Booking',
            url:`${booking}`,
            Aclassname:'active'
        },
        {
            name:'Timings',
            url:`${meetus}`,
            Aclassname:'active'
        },
        {
            name:'Contact Us',
            url:`${contactus}`,
            Aclassname:'active'
        },
        {
            name:'Social Accounts',
            url:`${account}`,
            Aclassname:'active'
        },
    ]
    console.log(`#${aboutme}`)
    const {currentUser,logout} = useAuth()
    const history = useHistory()
    const handelLogout = async () =>{
        try{
            await logout()
            history.push('/')
        }
        catch{
            console.log('Failed to logout')
        }
    }
    const [open, setOpen] = useState(false)
    const[activeclass,setActiveClass] = useState(false)
    console.log(activeclass)
    console.log(open)
    const clickableevent = ()=>{
        setOpen(!open)
        return false
    }
    return (
        <>
            <nav>
                <div className='logo'>Shree Ganesh Arts</div>
                <ul className='navigation-links'style={{transform: open?'translateX(0px)':''}}>
                        {menuItems.map((item)=>
                            (
                                <li key={item.name}  onClick={()=>setOpen(!open)}><a onClick={clickableevent} href={item.url.length>0?`#${item.url}`:'/'} className={activeclass?`${item.Aclassname}`:''}>{item.name}</a></li>
                            )
                        )}
                    {/* <li className='chalbyee'>
                        {currentUser?<button onClick={handelLogout} className='websitelogoutbtn'><span className='websitelogout'>Logout</span></button>:<Link to='/signin'><a className='login'>Login</a></Link>}
                    </li> */}
                </ul>
                {/* <li className='inclass'>
                    {currentUser?<button onClick={handelLogout} className='websitelogoutbtn'><span className='websitelogout'>Logout</span></button>:<Link to='/signin'><a className='login'>Login</a></Link>}
                </li> */}
                <i className='fas fa-bars burger' onClick={()=>setOpen(!open)}/>
            </nav>
        </>
    )
}
