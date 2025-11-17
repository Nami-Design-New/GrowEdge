import { useParams } from "react-router";
import { useEffect } from "react";

export default function BlogDetails() {
  const { id } = useParams();

const latestArticles = [
  {
    id: 1,
    title: "The Future of Technology in Saudi Arabia: Vision 2030",
    description:
      "An overview of the expected technological advancements in the Kingdom...",
    moreDetails: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid aperiam voluptatibus sed! Quam dicta repellat earum facilis eum nesciunt nobis sit facere. Iste facilis repudiandae iusto itaque sunt! Quaerat!",
    author: "Omar Al-Saeed",
    image: "../images/team.jpg",
    category: "Artificial Intelligence",
    date: "July 29, 2023",
    readTime: "4 mins read",
    points: [
      "15 Social profiles",
      "100 Accounts tracked",
      "80+ Account insights",
      "Unlimited team members",
    ],
  },
   {
    id: 2,
    title: "The Future of Technology in Saudi Arabia: Vision 2030",
    description:
      "An overview of the expected technological advancements in the Kingdom...",
    moreDetails: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid aperiam voluptatibus sed! Quam dicta repellat earum facilis eum nesciunt nobis sit facere. Iste facilis repudiandae iusto itaque sunt! Quaerat!",
    author: "Omar Al-Saeed",
    image: "../images/team.jpg",
    category: "Artificial Intelligence",
    date: "July 29, 2023",
    readTime: "4 mins read",
    points: [
      "15 Social profiles",
      "100 Accounts tracked",
      "80+ Account insights",
      "Unlimited team members",
    ],
  },
];

  const article = latestArticles.find((a) => a.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return <h2 className="not-found-article">Article Not Found</h2>;

  return (
    <div className="blog-details">
        <div className="container">
      <button className="back-btn mb-4" onClick={() => window.history.back()}>
        <i className="fas fa-arrow-left"></i> Back to Blogs
      </button>

      <div className="blog-image">
        <img src={article.image} alt={article.title} className="img-fluid rounded-4" />
      </div>

      <div className="blog-meta mt-3 d-flex gap-3 flex-wrap">
        <span className="category">{article.category}</span>
        <span className="date">{article.date} • {article.readTime}</span>
      </div>

      <h1 className="blog-title mt-3">{article.title}</h1>

      <p className="blog-description mt-3">{article.description}</p>

      {article.points && (
        <ul className="blog-points mt-3">
          {article.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
     {article.moreDetails && (
  <div className="more-details mt-4">
    <h2 className="more-details-title">More Details</h2>
    <p className="more-details-text">{article.moreDetails}</p>
  </div>
)}


    </div>
    </div>
  );
}
