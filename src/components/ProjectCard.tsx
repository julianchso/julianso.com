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
    <div className='project-card shadow'>
      <div className='project-card__image'>{image}</div>
      <div className='project-card__info'>
        <div className='project-card__title'>{title}</div>
        <div className='project-card__desc'>{desc}</div>
        <div className='project-card__tools'>
          {tools.map((tool, index) => (
            <li key={index} className='project-card__tool'>
              {tool}
            </li>
          ))}
        </div>

        <div className='project-card__links'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='project-card__link project-card__github'
          >
            <Github size={30} className='px-5' />
            <span>GitHub</span>
          </a>
          <a
            href={liveDemo}
            target='_blank'
            rel='noopener noreferrer'
            className='project-card__link project-card__liveDemo'
          >
            <Play size={30} className='px-5' />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
