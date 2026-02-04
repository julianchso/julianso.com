import type { LucideIcon } from 'lucide-react';

interface ContactLinksProps {
  icon: LucideIcon;
  link: string;
}

function ContactLinks({ icon: Icon, link }: ContactLinksProps) {
  return (
    <span className='contact-links'>
      <a href={link} target='_blank' rel='noopener noreferrer' className='contact-link'>
        <Icon className='contact-icon' />
      </a>
    </span>
  );
}

export default ContactLinks;
