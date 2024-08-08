import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {motion} from "framer-motion";

const iconAnim=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
        <motion.h1 
            whileInView={{y:0,opacity:1}}
            initial={{y:-100, opacity:0}}
            transition={{duration:1, delay:0}}
            className="my-20 text-center text-4xl"> Tech Stack</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
            variants={iconAnim(2)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <FaHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
            variants={iconAnim(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <FaCss3Alt className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div 
            variants={iconAnim(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <IoLogoJavascript className="text-7xl text-yellow-300" />
            </motion.div>
            <motion.div 
            variants={iconAnim(3.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <RiTailwindCssFill className="text-7xl text-cyan-300" />
            </motion.div>
            <motion.div 
            variants={iconAnim(4)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <FaReact className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconAnim(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-8">
                <TbBrandCpp className="text-7xl text-blue-500" />
            </motion.div>
            
        </div>
    </div>
  )
}

export default Tech