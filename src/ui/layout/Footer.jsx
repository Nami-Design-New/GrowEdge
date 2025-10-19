import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='footer_section'>
      <div className="container">
        <div className="footer_content row">
          <div className="brand_info col-lg-4 col-md-6">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p className="brand_desc">{t("footer.brandDesc")}</p>

            <ul className="contact_info">
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+966111234567">{t("footer.phone")}</a>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:support@skillbridge.com">
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <a href="https://www.google.com/maps?q=Riyadh,Saudi+Arabia">
                  {t("footer.location")}
                </a>
              </li>
            </ul>

            <div className="social_links">
              <h6>{t("footer.follow")}</h6>
              <div className="icons">
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>

          {["platform", "resources", "company", "legal"].map((col, i) => (
            <div className="footer_col col-6 col-lg-2 col-md-6" key={i}>
              <h6>{t(`footer.${col}.title`)}</h6>
              <ul>
                {t(`footer.${col}.links`, { returnObjects: true }).map(
                  (link, index) => (
                    <li key={index}>
                      <Link to="#">{link}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer_bottom">
          <p>{t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}
