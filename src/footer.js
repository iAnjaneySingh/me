import React, { Component } from 'react'
import './footer.css';

class footer extends Component {
  render() {
    return (
        // <!-- Footer -->
        <footer class="footer" id="Contact">
            <a href="mailto:asinghbits5@gmail.com" class="footer__link">asinghbits5@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                {/* <li class="social-list__item">
                    <a class="social-list__link" href="http://dribbble.com">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li> */}
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/iAnjaneySingh/">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
  }
}

export default footer;