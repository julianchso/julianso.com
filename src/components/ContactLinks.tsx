import type { LucideIcon } from 'lucide-react';

interface ContactLinksProps {
  icon: LucideIcon;
  link: string;
}

function ContactLinks({ icon: Icon, link }: ContactLinksProps) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='contact-link'>
      <Icon className='contact-icon' />
    </a>
  );
}

export default ContactLinks;
