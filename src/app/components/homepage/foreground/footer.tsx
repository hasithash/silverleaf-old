export default function Footer(){
    return (
        <footer className="w-full">
            <div className='w-full p-3'>
             <hr className='border-[0.5px] border-[rgba(255,255,255,1)] w-full'/>
            </div>
            <div className='flex flex-row w-full p-3 justify-around'>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    TOS
                </p>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    Privacy Policy
                </p>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    Help
                </p>
            </div>
        </footer>
    )
}