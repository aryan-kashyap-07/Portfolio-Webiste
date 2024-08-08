import { INTRO_PARA } from "../utils/constants";
import Aryan from "../assets/Aryan.jpg"
import {motion} from "framer-motion"


const anim = (delay)=>{
    return({
            hidden:{x:-100, opacity:0},
            visible:{
                x:0,
                opacity:1,
                transition:{duration:0.75, delay:delay},
            }
        }
    )
}


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={anim(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-7xl">
                        Aryan Kashyap
                    </motion.h1>
                    <motion.span 
                        variants={anim(0.5)}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> 
                        Frontend Developer
                    </motion.span>
                    <motion.p
                        variants={anim(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter ">
                        {INTRO_PARA}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1,delay:1.2}}
                        src={Aryan} alt="" className="rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero