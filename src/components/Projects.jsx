import {PROJECTS_INFO} from "../utils/constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
        {PROJECTS_INFO.map((project) => (
            <div key={project.id} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img src={project.image} alt="Project" width={250} height={250} className="mb-6 rounded"/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {project.title}
                    </h6>
                    <p className="mb-4 text-neutral-400">
                       {project.description} 
                    </p>
                    {   
                        project.tech.map((t)=>{
                        return <span key={t.id} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{t.name}</span>
                    })}
                </div>
            </div>
        ))}
                
            
            
        </div>
    </div>
  )
}

export default Projects