import { ReactNode } from 'react';

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
          <div className='project-github'>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
          <div className='project-liveDemo'>
            {' '}
            <a href={liveDemo} target='_blank' rel='noopener noreferrer'>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
