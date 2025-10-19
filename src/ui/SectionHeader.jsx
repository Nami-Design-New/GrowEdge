import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const SectionHeader = ({ title, subtitle }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const path = location.pathname.split("/")[1] || "home";

  return (
    <div className="section-head">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-wrap" data-aos="fade-up">
              <Link to="/">{t("routes.home")}</Link>
              <span>/</span>
              <h6 className="m-0">{title}</h6>
            </div>
              {subtitle && <p className="page-desc">{subtitle}</p>}

          </div>
          <div className="col-6 hide-sm">
            <div className="img" data-aos="zoom-in">
              <img
                src="/images/header.png"
                alt=""
                style={{
                  left: lang === "en" ? "unset" : "0",
                  right: lang === "en" ? "0" : "unset",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
