import React from "react";
import logo from "./../../Images/logo.png";

function Footer() {
  return (
    <footer class="site-footer bg-dark text-light p-2 mt-5  ">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 mt-3">
            <img
              src={logo}
              width="auto"
              height="75px"
              class="me-5"
              alt="something"
            />

            <div className="mt-3 d-flex justify-content-between text-center">
              <h3 class="col bi bi-instagram"></h3>
              <h3 class="col bi bi-facebook"></h3>
              <h3 class="col bi bi-messenger"></h3>
              <h3 class="col bi bi-twitter"></h3>
              <h3 class="col bi bi-youtube"></h3>
            </div>
          </div>

          <div class="col ">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="">C</a>
              </li>
              <li>
                <a href="">UI Design</a>
              </li>
              <li>
                <a href="">PHP</a>
              </li>
              <li>
                <a href="">Java</a>
              </li>
              <li>
                <a href="">Android</a>
              </li>
              <li>
                <a href="">Templates</a>
              </li>
            </ul>
          </div>

          <div class="col ">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>

          <div class="col ">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
