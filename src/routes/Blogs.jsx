import { useState } from "react";
import ArticleCard from "../components/blogs/ArticleCard";
import BlogFilter from "../components/blogs/BlogFilter";
import BlogHeader from "../components/blogs/BlogHeader";
import NewsletterSection from "../components/blogs/NewsletterSection";
import { useTranslation } from "react-i18next";

const latestArticles = [
  {
    featured: true,
    image: "../images/coaching.webp",
    category: "Technology",
    date: "March 18, 2024",
    title: "The Future of Technology in Saudi Arabia: Vision 2030",
    description:
      "An overview of the expected technological advancements in the Kingdom and the role of Vision 2030 in shaping the future of technology.",
    author: "Omar Al-Saeed",
    authorInitial: "O",
    readTime: "8 min read",
    likes: 156,
    comments: 24,
  },
  {
    featured: false,
    image: "../images/internship.avif",
    category: "Entrepreneurship",
    date: "March 15, 2024",
    title: "How to Launch a Successful Startup in 2025",
    description:
      "A comprehensive guide to the essential steps for starting a successful business and leveraging current market opportunities.",
    author: "Laila Mahmoud",
    authorInitial: "L",
    readTime: "6 min read",
    likes: 98,
    comments: 12,
  },
  {
    featured: false,
    image: "../images/team.jpg",
    category: "Software Development",
    date: "March 13, 2024",
    title: "Top Programming Languages to Learn This Year",
    description:
      "Explore the most in-demand programming languages in the job market and how to choose the right one for you.",
    author: "Mohamed Ali",
    authorInitial: "M",
    readTime: "7 min read",
    likes: 120,
    comments: 18,
  },
  {
    featured: true,
    image: "../images/coaching.webp",
    category: "Technology",
    date: "March 11, 2024",
    title: "Artificial Intelligence and Its Impact on Future Jobs",
    description:
      "A look at how AI is shaping the job market and what opportunities and challenges lie ahead.",
    author: "Sarah Khaled",
    authorInitial: "S",
    readTime: "5 min read",
    likes: 200,
    comments: 30,
  },
  {
    featured: false,
    image: "../images/coaching.webp",
    category: "Entrepreneurship",
    date: "March 8, 2024",
    title: "Smart Investment Tips for Young Entrepreneurs",
    description:
      "Clever strategies for investing in startups while minimizing risks.",
    author: "Ahmed Samir",
    authorInitial: "A",
    readTime: "4 min read",
    likes: 80,
    comments: 10,
  },
  {
    featured: false,
    image: "../images/internship.avif",
    category: "Software Development",
    date: "March 5, 2024",
    title: "Building Interactive Websites with React",
    description:
      "Step-by-step guide to designing and developing a modern website using React and its advanced features.",
    author: "Hend Mostafa",
    authorInitial: "H",
    readTime: "9 min read",
    likes: 150,
    comments: 22,
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();

 const categoryMap = {
  all: "all",
  entrepreneurship: "Entrepreneurship",
  softwareDev: "Software Development",
  technology: "Technology",
};

const filteredArticles = latestArticles.filter((article) => {
  const matchCategory =
    activeCategory === "all"
      ? true
      : article.category === categoryMap[activeCategory];

  const matchSearch =
    article.title.toLowerCase().includes(searchText.toLowerCase()) ||
    article.description.toLowerCase().includes(searchText.toLowerCase());

  return matchCategory && matchSearch;
});

  return (
    <>
      <BlogHeader />
      <BlogFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <div className="articles-list container">
        <div className="row g-3">
       <h2>{t("blog.header")}</h2>

          {filteredArticles.map((article, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
      <NewsletterSection />
    </>
  );
}
