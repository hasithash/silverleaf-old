import Navbar from "./navbar/navbar"
import { VideoNButtons } from "./videonbuttons"

export const Header:React.FC = ()=>{
    return (
        <header className="w-full mt-10 flex flex-col items-center">
            <VideoNButtons/>
        </header>
    )
}