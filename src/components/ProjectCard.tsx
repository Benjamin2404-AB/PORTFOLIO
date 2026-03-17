interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string[];
  github?: string;
  demo?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Use a fallback dummy image if none is provided
  const imgUrl = project.image && project.image !== '' && project.image !== '/projects/contactflow.png' && project.image !== '/projects/ecommerce.png' && project.image !== '/projects/workshop.png' && project.image !== '/projects/codelab.png' && project.image !== '/projects/road-simulator.png' ? project.image : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop';
  
  return (
    <div className="flex flex-col rounded-xl border border-gray-800 bg-[#121212] overflow-hidden  hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group mx-auto md:mx-none w-11/12 md:w-[400px] md:min-w-[400px] h-full">
      
      {/* Top Image Section */}
      <div className="w-full h-48 overflow-hidden relative border-b border-gray-800 bg-black">
        <img 
          src={imgUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        {/* Overlay gradient so text/badges on image stand out if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2128] to-transparent opacity-60" />
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-col gap-4 text-left //bg-red-500 !py-6 !px-4 ">
        
        {/* Title */}
        
        <h3 className="text-[18px] font-bold text-white">
          {project.title}
        </h3>
      

        {/* Description */}
        <p className="text-[#a0aab2] text-sm md:text-[13px] leading-relaxed flex-1 line-clamp-3 md:line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Horizontal Layout */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[14px] font-medium text-white tracking-wide">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[14px] font-medium text-gray-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer (Links) */}
        <div className="flex gap-4 pt-6 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] font-medium text-[#a0aab2] hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
