import Ecell from "../assets/ECELL_LOGO.png"
import { MY_ECELL_INTRO,ECELL_INTRO } from "../utils/constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">E-Cell<span className="text-neutral-500"> IET DAVV</span></h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:pl-32 pt-16">
                <img src={Ecell} alt="" className="h-72" />
            </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-center lg:justify-start">
                      <p>
                      {ECELL_INTRO}
                      </p>
                      <br />
                      <p>
                      {MY_ECELL_INTRO}
                      </p>
                    </div>
                <div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About;