import ProjectCard from './ProjectCard';
import pokestore from '../assets/pokestore.jpg';
import fileUploader from '../assets/fileUploader.png';

function Projects() {
  return (
    <div className='projects__content'>
      <h2>Projects</h2>
      <div className='projects__layout'>
        <ProjectCard
          title='Pokemon Store'
          image={pokestore}
          desc='A Pokémon-themed online store built with React, featuring product data fetched from the PokéAPI. The application demonstrates component-based architecture, API integration, and responsive UI design to simulate a shopping cart on any e-commerce website.'
          tools={['javascript', 'node.js', 'react', 'api']}
          // liveDemo='liveDemo'
          github='https://github.com/julianchso/shopping-cart-pokemon'
        />
        <ProjectCard
          title='File Uploader'
          image={fileUploader}
          desc='A file uploader built with React and Supabase, allowing users to create nested folders within a folder tree and upload files of any type. The application simulates cloud storage platforms such as Dropbox and Google Drive, showcasing file management and database integration.'
          tools={['javascript', 'node.js', 'react', 'api']}
          // liveDemo='liveDemo'
          github='https://github.com/julianchso/odin-FileUploader'
        />
      </div>
    </div>
  );
}

export default Projects;
