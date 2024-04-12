import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import styles from "./Project.module.scss";
import useWindowResize from "../../hooks/useWindowResize";
import mobileApp from "../../assets/home/mobile/image-app-design.jpg";
import mobileWeb from "../../assets/home/mobile/image-web-design.jpg";
import mobileGraphic from "../../assets/home/mobile/image-graphic-design.jpg";
import tabletApp from "../../assets/home/tablet/image-app-design.jpg";
import tabletWeb from "../../assets/home/tablet/image-web-design.jpg";
import tabletGraphic from "../../assets/home/tablet/image-graphic-design.jpg";
import desktopApp from "../../assets/home/desktop/image-app-design.jpg";
import desktopWebSmall from "../../assets/home/desktop/image-web-design-small.jpg";
import desktopWebLarge from "../../assets/home/desktop/image-web-design-large.jpg";
import desktopGraphic from "../../assets/home/desktop/image-graphic-design.jpg";
import { useNavigate } from "react-router-dom";

const Project = ({ href, title, image, className, large }) => {
  const windowWidth = useWindowResize();
  const navigate = useNavigate();
  //find image to render depending of window size
  const findImage = (i) => {
    if (i === "web") {
      return windowWidth < 768
        ? mobileWeb
        : windowWidth > 768 && windowWidth < 1280
        ? tabletWeb
        : windowWidth > 768 && large
        ? desktopWebLarge
        : desktopWebSmall;
    }
    if (i === "app") {
      return windowWidth < 768
        ? mobileApp
        : windowWidth > 768 && windowWidth < 1280
        ? tabletApp
        : desktopApp;
    }
    if (i === "graphic") {
      return windowWidth < 768
        ? mobileGraphic
        : windowWidth > 768 && windowWidth < 1280
        ? tabletGraphic
        : desktopGraphic;
    }
  };
  const renderImg = findImage(image);

  const handleRedirect = (href) => {
    navigate(href);
  };

  return (
    <div
      className={`${styles.project} ${className ? className : ""}`}
      onClick={() => handleRedirect(href)}
    >
      <div className={styles["project__content"]}>
        <h2>{title}</h2>
        <Link to={href} aria-label={`View projects for ${title}`}>
          VIEW PROJECTS
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </Link>
      </div>
      <div className={styles["project__bg-image"]}>
        <img src={renderImg} alt="background" />
      </div>
    </div>
  );
};

export default Project;
