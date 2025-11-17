import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/blog/${article.id}`} className=" text-decoration-none text-dark">
      <div className="article-card">

        <div className="image-wrapper">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="content">
          <div className="category-date">
            <span className="category">{article.category}</span>
            <span className="date">{article.date}</span>
          </div>

          <h3 className="title">{article.title}</h3>
          <p className="description">{article.description}</p>

          <div className="author-info d-flex align-items-center justify-content-between">
            <div className="author d-flex align-items-center gap-2">
              <div className="author-img">{article.authorInitial}</div>
              <span>{article.author}</span>
              <span className="read-time">{article.readTime}</span>
            </div>

            <div className="stats d-flex gap-3">
              <span><i className="fa-regular fa-heart"></i> {article.likes}</span>
              <span><i className="fa-regular fa-comment"></i> {article.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ArticleCard;
