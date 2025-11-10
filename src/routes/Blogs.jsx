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
    category: "التكنولوجيا",
    date: "8 رمضان 1445 هـ",
    title: "مستقبل التكنولوجيا في السعودية: رؤية 2030",
    description: "نظرة شاملة على التطورات التقنية المتوقعة في المملكة ودور رؤية 2030 في تشكيل مستقبل التكنولوجيا",
    author: "عمر السعيد",
    authorInitial: "ع",
    readTime: "8 دقائق قراءة",
    likes: 156,
    comments: 24
  },
  {
    featured: false,
    image: "../images/internship.avif",
    category: "ريادة الأعمال",
    date: "5 رمضان 1445 هـ",
    title: "كيفية إطلاق مشروع ناجح في 2025",
    description: "دليل شامل للخطوات الأساسية لبدء مشروع ناجح والاستفادة من فرص السوق الحالية.",
    author: "ليلى محمود",
    authorInitial: "ل",
    readTime: "6 دقائق قراءة",
    likes: 98,
    comments: 12
  },
  {
    featured: false,
    image: "../images/team.jpg",
    category: "تطوير البرمجيات",
    date: "3 رمضان 1445 هـ",
    title: "أفضل لغات البرمجة لتعلمها هذا العام",
    description: "استعرض أهم لغات البرمجة المطلوبة في سوق العمل وكيفية اختيار اللغة المناسبة لك.",
    author: "محمد علي",
    authorInitial: "م",
    readTime: "7 دقائق قراءة",
    likes: 120,
    comments: 18
  },
  {
    featured: true,
    image: "../images/coaching.webp",
    category: "التكنولوجيا",
    date: "1 رمضان 1445 هـ",
    title: "الذكاء الاصطناعي وتأثيره على الوظائف المستقبلية",
    description: "نظرة على كيفية تأثير الذكاء الاصطناعي على سوق العمل وفرص المستقبل.",
    author: "سارة خالد",
    authorInitial: "س",
    readTime: "5 دقائق قراءة",
    likes: 200,
    comments: 30
  },
  {
    featured: false,
    image: "../images/coaching.webp",
    category: "ريادة الأعمال",
    date: "28 شعبان 1445 هـ",
    title: "نصائح للمستثمرين الشباب",
    description: "طرق ذكية للاستثمار في المشاريع الناشئة مع الحد من المخاطر.",
    author: "أحمد سمير",
    authorInitial: "أ",
    readTime: "4 دقائق قراءة",
    likes: 80,
    comments: 10
  },
  {
    featured: false,
    image: "../images/internship.avif",
    category: "تطوير البرمجيات",
    date: "25 شعبان 1445 هـ",
    title: "تصميم مواقع ويب تفاعلية باستخدام React",
    description: "خطوات تصميم وتطوير موقع ويب حديث باستخدام React وميزات حديثة.",
    author: "هند مصطفى",
    authorInitial: "ه",
    readTime: "9 دقائق قراءة",
    likes: 150,
    comments: 22
  }
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();

  const categoryMap = {
    all: "الكل",
    entrepreneurship: "ريادة الأعمال",
    softwareDev: "تطوير البرمجيات",
    technology: "التكنولوجيا",
  };

  const filteredArticles = latestArticles.filter((article) => {
    const matchCategory =
      activeCategory === "all"
        ? true
        : article.category === categoryMap[activeCategory];

    const matchSearch =
      article.title.includes(searchText) ||
      article.description.includes(searchText);

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
