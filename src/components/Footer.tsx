function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer__content'>
      <span>
        &copy; Julian So <span>{currentYear}</span>
      </span>
    </div>
  );
}

export default Footer;
