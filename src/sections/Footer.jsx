function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/yordan-gergov01">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="www.linkedin.com/in/yordangergov">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/yordan.gergov/">
            <img
              src="/assets/instagram.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">
        &copy;{currentYear} YG Portfolio. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
