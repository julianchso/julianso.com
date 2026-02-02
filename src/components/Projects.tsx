import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='projects'>
      <h2 className='section-title'>Projects</h2>
      <div className='projects-container'>
        <ProjectCard
          title='lorem'
          image='Placeholder'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae aperiam eveniet, dicta distinctio minus vero enim quam voluptate iusto.'
          tools={['javascript', 'node.js', 'react']}
          liveDemo='liveDemo'
          github='github'
        />
        <ProjectCard
          title='lorem'
          image='Placeholder'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae aperiam eveniet, dicta distinctio minus vero enim quam voluptate iusto.'
          tools={['javascript', 'node.js', 'react']}
          liveDemo='liveDemo'
          github='github'
        />
      </div>
    </div>
  );
}

export default Projects;
