import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactLinks({ icon, link }) {
  return (
    <span className='contactLinks'>
      <a href={link} target='_blank' rel='noopener noreferrer' className='contactLinks'>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
}

export default ContactLinks;
