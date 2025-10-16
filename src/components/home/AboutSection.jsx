import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const features = [
    {
      title: t("about.features.goalOrientedTitle"),
      desc: t("about.features.goalOrientedDesc"),
    },
    {
      title: t("about.features.projectSuccessTitle"),
      desc: t("about.features.projectSuccessDesc"),
    },
  ];

  return (
    <section ref={ref} className="about-section" aria-labelledby="about-title">
      <div className="container">
      <div className="about-inner ">

   <div className="about-content">
          <span className="kicker">{t("about.kicker")}</span>
          <h2 id="about-title">{t("about.title")}</h2>
          <p className="lead">{t("about.description")}</p>

          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
                <span className="check-icon">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="actions">
            <a className="btn primary" href="/signup">
              {t("about.actions.joinNow")}
            </a>
            <a className="btn ghost" href="/about">
              {t("about.actions.learnMore")}
            </a>
          </div>
        </div>

        <div className="collage" aria-hidden="true">
          <div className="collage__bg" />
          <figure className="collage__card collage__card-square">
            <img src="/images/team.jpg" alt={t("about.collage.alt.work")} />
          </figure>

          <figure className="collage__card collage__card-large-circle">
            <img src="/images/work.jfif" alt={t("about.collage.alt.team")} />
          </figure>

          <div className="collage__badge collage__badge-like">
            <img src="/images/avatar.jpg" alt="Bryan" />
            <div className="badge-text">
              <span>{t("about.collage.like.name")}</span>
              <div className="like-count">{t("about.collage.like.action")}</div>
            </div>
          </div>

          <div className="collage__badge collage__badge-follow">
            <img src="/images/avatar2.jpg" alt="Monica" />
            <div className="badge-text">
              <span>{t("about.collage.follow.name")}</span>
              <div className="follow-count">{t("about.collage.follow.action")}</div>
            </div>
          </div>
        </div>

     
      </div>
      </div>
    </section>
  );
};

export default About;
