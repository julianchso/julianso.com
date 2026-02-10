import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='projects__content'>
      <h2>Projects</h2>
      <div className='projects__layout'>
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
