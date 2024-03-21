import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName,selectUserPhoto ,setSignOutState,setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";

function Header() {
const dispatch = useDispatch()
const Navigate = useNavigate()
const username = useSelector(selectUserName)
const userphoto = useSelector(selectUserPhoto)

useEffect(() => {
    auth.onAuthStateChanged(async (user) =>{
        if(user){
            setUser(user)
            Navigate("/DisneyClone/home")
        }
    })
},[username])

 const handleauth = (event) => {
    event.preventDefault()
        if(!username){
            signInWithPopup(auth,provider).then((result) =>{
          
            setUser(result.user)
          
        })
        .catch((e) => {
            alert(e.message)
        })}
        else if (username){
            auth.signOut().then(()=>{
                dispatch(setSignOutState)
                Navigate("/DisneyClone/")
            })
            .catch((err => alert(err.message)))
        }
    }

const setUser = (user) => {
dispatch(
    setUserLoginDetails({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
    })
)
}

    return (
        <div className="fixed top-0 left-0 right-0 h-18 bg-black flex justify-between items-center px-9 tracking-[16px] z-10">
           <div >
            <img src="./images/images/logo.svg" className=" w-full p-0 mt-1 max-h-16  mb-4 inline-block text-sm" />
           </div>
           {
            !username ?( 
            <div className="bg-black uppercase py-2 px-4 tracking-[1.5px] border hover:border-transparent border-solid rounded transition-all hover:bg-white ">
               <a href="" className="hover:text-black" onClick={handleauth}> Login </a>
            </div>) :
            (<>
             <div className="items-center md:flex flex-nowrap flex-row h-full justify-end relative mr-auto ml-6 hidden">
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/home-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap text-sm hover:border-b-2 transition-all ease-out">Home</span>
                </a> 
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/search-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap hover:border-b-2 transition-all ease-out text-sm">Search</span>
                </a> 
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/watchlist-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap hover:border-b-2 transition-all ease-out text-sm">Watch</span>
                </a> 
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/original-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap hover:border-b-2 transition-all ease-out text-sm">Originals</span>
                </a> 
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/movie-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap hover:border-b-2 transition-all ease-out text-sm">Movies</span>
                </a> 
                <a href="/home" className="flex items-center px-3"> 
                <img src="./images/images/series-icon.svg" className="h-5 min-w-5 w-5 z-auto" />
                <span className="text-gray-200 tracking-[1.42px] py-1 relative whitespace-nowrap hover:border-b-2 transition-all ease-out text-sm">Series</span>
                </a> 
               
            </div>
            <div className="relative h-12 w-12 flex cursor-pointer items-center justify-center ">
                    <img className="rounded-[50%]" src={userphoto} alt={username} />
                    
                    <div className="absolute top-12 right-0 bg-black border rounded border-solid p-3 text-xs tracking-[3px] w-28 opacity-0 hover:opacity-100 hover:transition hover:duration-1000">
                        <span onClick={handleauth}>Sign Out</span>
                    </div>
                </div>
            </>)
           }

        </div>
    );
}

export default Header;