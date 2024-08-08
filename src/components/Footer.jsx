import {motion} from "framer-motion";


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{y:0,opacity:1}}
        initial={{y:-100, opacity:0}}
        transition={{duration:1, delay:0}}
        className="my-10 text-center text-4xl">Contact Me</motion.h1>
        <motion.div 
        initial={{x:-100, opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        className="text-center tracking-tighter ">
            <p className="my-4">
                Jabalpur
            </p>
            <p className="my-4">
                +91-7879571657
            </p>
            <a href={`mailto:$aryankashyap3070@gmail.com`} className="border-b ">aryankashyap3070@gmail.com</a>
        </motion.div>
    </div>
   
  )
}

export default Footer