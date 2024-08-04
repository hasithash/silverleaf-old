import { NavLink } from "./link"

export default function Navbar(props:{invisible?:boolean,darkText?:boolean}){
    return (
        <div className={`w-full h-fit ${props.invisible ? 'opacity-0' : 'absolute top-0 left-0'} `}>
            <div className="w-full z-10 backdrop-blur-md flex flex-row items-center justify-around sticky h-[120px]">
                <h1 className="text-4xl font-bold">
                    SilverLeaf
                </h1>
                <div className={`flex flex-row justify-between ${props.darkText ? 'text-black' : ''}`}>
                    <NavLink blackText={props.darkText} to='/about-us'>About Us</NavLink>
                    <NavLink blackText={props.darkText} to='/recruiters'>For Recruiters</NavLink>
                    <NavLink blackText={props.darkText} to='/clients'>For Clients</NavLink>
                    <NavLink blackText={props.darkText} to='/help'>Help</NavLink>
                </div>
                <div className="flex flex-row justify-between">
                    <NavLink blackText={props.darkText} to='/auth/log-in'>Log In</NavLink>
                    <NavLink blackText={props.darkText} to='/auth/sign-up'>Sign Up</NavLink>
                    <NavLink fill to='demo'>Request Demo</NavLink>
                </div>
            </div>
        </div>
    )
}