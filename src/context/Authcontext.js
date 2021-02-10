import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../Firebase'
import firebase from 'firebase'
import {appfire} from '../Firebase'
import {useHistory} from 'react-router-dom'
const AuthContext = React.createContext()
const db =  appfire.firestore()

export const useAuth =()=>{
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const history = useHistory()
    const provider = new firebase.auth.GoogleAuthProvider();
    // console.log(auth.Auth.Persistence)
    const[currentUser, setCurrentUser] = useState(null)
    console.log(currentUser)
    const [makeadminuser, setMakeAdminUser] = useState('')
    console.log(makeadminuser.id)
    const [lengthimg, setLength] = useState('')
    const lengthvalue = lengthimg.length
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState('')
    console.log(admin)
    const signUp = (email,password)=>{
        return auth.createUserWithEmailAndPassword(email,password).then(credit=>{
            return db.collection('siteUsers').doc(`${credit.user.uid}`).set({
                email: credit.user.email,
                role: 'user',
            })
        })
    }

    const signinwithgoogle = ()=>{
        return auth.signInWithPopup(provider).then(credit=>{
            return db.collection('siteUsers').doc(`${credit.user.uid}`).set({
                email: credit.user.email,
                role: 'user',
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const login = (email,password) =>{
            return auth.signInWithEmailAndPassword(email, password).then(user=>{
                return console.log(user)
            })
    }

const makeAdmin = email =>{
  db.collection('siteUsers').where('email','==',email).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(doc.email)
        var currentID = doc.id
        setMakeAdminUser({...doc.data(),['id']:currentID})
    });
})
// .then(()=>{
//     return db.collection('siteUsers').doc(`${makeadminuser.id}`).update({
//         role:'admin'
//     })
// })
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
}

const updaterole = ()=>{    
db.collection('siteUsers').doc(`${makeadminuser.id}`).update({
    role:'admin',
})
}


const SigninWithpresistance = (email,password) =>{
    return auth.setPersistence(auth.Auth.Persistence.LOCAL)
     .then(()=>{
         return auth.signInWithEmailAndPassword(email,password)
     })
     .catch(error =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
     })
}
    const logout = ()=>{
        return auth.signOut()
    //     .then(()=>{
    //     setCurrentUser('')
    // })
    }
const onAuthStateChanged = (callback) =>{
    auth.onAuthStateChanged(user=>{
        if(user){
            callback(user)
        }
        else{
            callback(null)
        }
        setLoading(!loading)
    })
}
const getAdmin = ()=>{
    const getuserdata = []
    db.collection('siteUser').where('role','==','admin').onSnapshot(
        snapshot=>{
            snapshot.forEach(user=>{
                let objData = {...user.data()}
                getuserdata.push(objData)
            })
            setAdmin(getuserdata)
        }
    )
}
// getAdmin()
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(setCurrentUser)
        
        return  unsubscribe
    },[])

    const value ={
        currentUser,
        signUp,
        login,
        logout,
        makeAdmin,
        SigninWithpresistance,
        makeadminuser,
        updaterole,
        signinwithgoogle,
    }
if(loading){
    <div>Loadig....</div>
}
    return (
                <AuthContext.Provider value={value}>
                    {!loading && children}
                </AuthContext.Provider>
    )
}
