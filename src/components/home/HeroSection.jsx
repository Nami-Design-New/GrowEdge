import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [active, setActive] = useState(null);
  const { t } = useTranslation();

  const sections = [
    {
      title: t("hero.coachingTitle"),
      text: t("hero.coachingText"),
      button: t("hero.coachingButton"),
      image: "/images/coaching.webp",
    },
    {
      title: t("hero.internshipTitle"),
      text: t("hero.internshipText"),
      button: t("hero.internshipButton"),
      image: "/images/internship.avif",
    },
    {
      title: t("hero.mvpTitle"),
      text: t("hero.mvpText"),
      button: t("hero.mvpButton"),
      image: "/images/mvp.webp",
    },
  ];

  return (
    <div className="hero">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`hero__panel ${active === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${section.image})` }}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          <div className="hero__overlay">
            <div className="hero_title">
              <h2>{section.title}</h2>
              <span className="arrow">
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </div>

            <div className="hero__bullets">
              {[0, 1, 2].map((bulletIndex) => (
                <span
                  key={bulletIndex}
                  className={`bullet ${
                    active === index && bulletIndex === index ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>

            {active === index && (
              <div className="hero__content">
                <p>{section.text}</p>
                <button>{section.button}</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
