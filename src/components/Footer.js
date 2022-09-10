import React from "react";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/shira-ohana/" target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/ShiraOhana" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="/">
              Home
            </a>

            <a href="/">About</a>

            <a href="/">Faq</a>

            <a href="/">Contact</a>
          </p>

          <p>Geekup &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
