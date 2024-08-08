import Ecell from "../assets/ECELL_LOGO.png"
import { MY_ECELL_INTRO,ECELL_INTRO } from "../utils/constants";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
          whileInView={{y:0,opacity:1}}
          initial={{y:-100, opacity:0}}
          transition={{duration:1, delay:0}}
          className="my-20 text-center text-4xl">E-Cell<span className="text-neutral-500"> IET DAVV</span></motion.h2>
        <div className="flex flex-wrap">
            <div className="w-full mb-5 lg:w-1/2 lg:pl-32 pt-16">
                <motion.img src={Ecell} alt="" className="h-72" 
                        whileInView={{x:0,opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:1, delay:0}}
                />
            </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-center lg:justify-start">
                      <motion.p 
                        whileInView={{x:0,opacity:1}}
                        initial={{x:100, opacity:0}}
                        transition={{duration:1}}>
                        {ECELL_INTRO}
                      </motion.p>
                      <br />
                      <motion.p
                        whileInView={{x:0,opacity:1}}
                        initial={{x:100, opacity:0}}
                        transition={{duration:1}}>
                        {MY_ECELL_INTRO}
                      </motion.p>
                    </div>
                <div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About;