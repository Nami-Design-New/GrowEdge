import { useTranslation } from "react-i18next";

const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <section className="newsletter-section container">
      <div className="bg-cover"></div>

      <div className="newsletter-content text-center">
        <h2 className="title">{t("blog.newsletter.title")}</h2>
        <p className="subtitle">
          {t("blog.newsletter.subtitle")}
        </p>

        <form className="newsletter-form gap-2 flex-wrap">
          <input
            type="email"
            placeholder={t("blog.newsletter.placeholder")}
            className="form-control email-input"
          />
          <button type="submit" className="btn btn-subscribe">
            <span>{t("blog.newsletter.button")}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
