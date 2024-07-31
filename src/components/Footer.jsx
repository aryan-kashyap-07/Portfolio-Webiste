import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Contact Me</h1>
        <div className="text-center tracking-tighter ">
            <p className="my-4">
                Jabalpur
            </p>
            <p className="my-4">
                +91-7879571657
            </p>
            <a href={`mailto:$aryankashyap3070@gmail.com`} className="border-b ">aryankashyap3070@gmail.com</a>
        </div>
    </div>
   
  )
}

export default Footer