import React,{useState} from "react";
const AuthContext = React.createContext()
import {appfire} from '../Firebase'
const db = appfire
export const useAuthList =()=>{
    return useContext(AuthContext)
}

export const List = ()=>{
    
}
const [lengthimg,getLength] = useState('')
export const shadulength = lengthimg.length
db.collection('ganpatiSampleUsers').onSnapshot(
    snapshot=>{
        snapshot.docs.forEach(
            image=>{
                let objdata = {...image.data()}
                getLength(objdata)
            }
        )
    }
    
)