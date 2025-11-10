import { useTranslation } from "react-i18next";

const BlogHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="blog-header text-center">
      <div className="icon">
        <img src="../images/icon.png" alt="icon" />
      </div>
      <h1 className="title">{t("blog.headerTitle")}</h1>
      <p className="subtitle">
        {t("blog.headerSubtitle")}
      </p>
    </div>
  );
};

export default BlogHeader;
