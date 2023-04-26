import React, { useRef, useEffect } from "react";
import { MainOverlay } from "../components/MainOverlay";
import { ButtonToTop } from "../components/ButtonToTop";
import { CanvasHome } from "../components/CanvasHome";
import "./home.css";

export function HomePage() {
  // ON VISIBILITY CHANGE FUNCTIONS ////////////////////////////////
  function isInViewPort(element) {
    const innerHeightRatio = 0.8;

    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight * innerHeightRatio || document.documentElement.clientHeight * innerHeightRatio);
    // && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  const contentContainer1 = useRef(null);
  const contentContainer2 = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (isInViewPort(contentContainer1.current)) {
        contentContainer1.current.classList.add("open");
      } else {
        contentContainer1.current.classList.remove("open");
      }

      if (isInViewPort(contentContainer2.current)) {
        contentContainer2.current.classList.add("open");
      } else {
        contentContainer2.current.classList.remove("open");
      }

      // for (let i = 0; i < contentContainer.current.length; i++) {
      //   if (isInViewPort(contentContainer.current[i])) {
      //     contentContainer.current[i].classList.add("open");
      //   } else if (!isInViewPort(contentContainer.current[i])) {
      //     contentContainer.current[i].classList.remove("open");
      //   }
      // }
    });
  });

  return (
    <>
      <MainOverlay />
      <ButtonToTop />
      <CanvasHome />
      <header className="hero-section">
        <p className="hero-text">Welcome!</p>
        <p className="hero-text">
          My name is Craig <span className="word-pop">Kaufman</span>
        </p>
        <p className="hero-text">
          This is my portfolio of<br></br>
          <a className="text-link" href="/">
            3D
          </a>
        </p>
        <p className="hero-text">I hope you enjoy!</p>
      </header>

      <hr className="banner"></hr>

      <section className="content-container color-bg" ref={contentContainer1}>
        <div className="content-row">
          <div className="column">
            <h2 className="content-heading">All Themes are Responsive</h2>
            <p className="content-content">Everything will look great and function properly on any device.</p>
          </div>
          <div className="column">
            <div className="responsive-project">
              <div className="responsive-computer">
                <div className="responsive-image"></div>
                <div className="responsive-phone"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="banner"></hr>

      <section className="content-container transparent-bg" ref={contentContainer2}>
        <div className="content-row test">
          <div className="column">
            <h2 className="content-heading test">All Themes are Responsive</h2>
            <p className="content-content test">Everything will look great and function properly on any device.</p>
          </div>
          <div className="column">
            <div className="responsive-project test">
              <div className="responsive-computer">
                <div className="responsive-image"></div>
                <div className="responsive-phone"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="banner"></hr>
    </>
  );
}