import { PillarCard } from "./pillarCard/pillarCard"
import Testimonial from "./testimonial/testimonial"
import '../style.css'
import { Handshake } from "./pillarCard/icons/handshake"
import { Clock } from "./pillarCard/icons/clock"
import { Heart } from "./pillarCard/icons/heart"
import { Brain } from "./pillarCard/icons/brain"
export default function Main(){
    const testimonials = require("./testimonials.json") as {testimonials:{name:string,message:string,country:string,rating:string}[]}
    return (
        <main className="w-full">
            <div className='w-full p-2'>
                <div className='flex flex-row w-full items-center justify-center'>
                    <div className='flex flex-row carousel'>
                        {
                            testimonials.testimonials.map((testimonial:any)=>{
                                return (
                                    <Testimonial testimonial={testimonial} key={Math.random()}/>
                                )
                            })
                        }
                        {
                            testimonials.testimonials.map((testimonial:any)=>{
                                return (
                                    <Testimonial testimonial={testimonial} key={Math.random()}/>
                                )
                            })
                        }
                        {
                            testimonials.testimonials.map((testimonial:any)=>{
                                return (
                                    <Testimonial testimonial={testimonial} key={Math.random()}/>
                                )
                            })
                        }
                    </div>
                </div>
                <h1 className='font-extrabold text-[72px] gradientB mb-2'>WHAT DEFINES US?</h1>
                <div className='w-fit p-2 grid grid-cols-2 gap-2'>
                    <PillarCard delay={150} animId='cardA' title='Opportunities' body='Because you deserve progress.' icon={<Handshake/>}/>
                    <PillarCard delay={50} animId='cardB' title='Efficiency' body='Because your time is priceless.' icon={<Clock/>}/>
                    <PillarCard delay={350} animId='cardC' title='Customer Appreciation' body='Because you give us purpose, feedback and resources. You are our top priority.' icon={<Heart/>}/>
                    <PillarCard delay={250} animId='cardD' title='Innovation' body='To focus on what you care about, not on inconveniences.' icon={<Brain/>}/>
                </div>
            </div>
        </main>
    )
}

function Subtitle({children}: Readonly<{children: React.ReactNode;}>) {
    return (
      <h2 className='font-bold gradientB text-[24px]'>
          {children}
      </h2>
    )
  }
  