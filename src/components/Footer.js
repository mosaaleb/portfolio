import React from 'react'

const Footer = () => {
  const handleClick = () => {
    const top = document.querySelector('#top');
    top.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="Footer">
      <section className="contact">
        <p>
          Email: <a className="link" href="mailto:dj30c.1@gmail.com">dj30c.1@gmail.com</a>
        </p>
        <p>
          Github: <a className="link" href="https://github.com/juzQrios">@juzQrios</a>
        </p>
      </section>
      <section className="to-top">
        <button onClick={handleClick}>
          <div>^</div>
          <div>To Top</div>
        </button>
      </section>
    </footer>
  );
}

export default Footer;
