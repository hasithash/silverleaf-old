import Button from "../../general/button/button"

export const VideoNButtons:React.FC = ()=>{
    return (
        <>
            <div className="w-full flex max-lg:flex-col lg:flex-row lg:justify-between items-start p-3">
                <div className="lg:flex-[4] h-100 flex flex-col p-2">
                    <div className="flex flex-col w-full">
                        <h1 className='text-6xl gradient font-extrabold'>SILVERLEAF</h1>
                        <h2 className='text-2xl gradient'>Recruitment, made better. Find your ideal talent in a matter of days.</h2>
                        <div className="flex flex-row justify-start gap-2 pt-2">
                            <Button fill text="Request a Demo" />
                            <Button fill text="Get Started" />
                        </div>
                    </div>
                </div>
                <div className="flex min-w-[560px] lg:flex-[6] items-center justify-center">
                    <iframe 
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/qLAUIVXFcfo?si=4PkYi0JQu_lWCAxW" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className='rounded-lg border border-white'>
                    </iframe>
                </div>
            </div>
            {/* <div className='w-full flex flex-row items-center justify-center gap-2'>
                <Button text='More Information' fill={false}/>
                <Button text='Go to App' fill={true}/>
            </div> */}
        </>
    )
}