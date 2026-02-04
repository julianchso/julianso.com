import { ReactNode } from 'react';
import { Github, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image?: ReactNode;
  desc: string;
  tools: Array<string>;
  liveDemo?: ReactNode;
  github: ReactNode;
}

function ProjectCard({ title, image, desc, tools, liveDemo, github }: ProjectCardProps) {
  return (
    <div className='project-card'>
      <div className='project-image'>{image}</div>
      <div className='project-info'>
        <div className='project-title'>{title}</div>
        <div className='project-desc'>{desc}</div>
        <div className='project-tools'>
          {tools.map((tool, index) => (
            <li key={index} className='project-tool'>
              {tool}
            </li>
          ))}
        </div>

        <div className='project-links'>
          <button className='project-link project-github'>
            <Github size={30} className='px-5' />
            <a href={github} target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </button>
          <button className='project-link project-liveDemo'>
            <Play size={30} className='px-5' />
            <a href={liveDemo} target='_blank' rel='noopener noreferrer'>
              Live Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
