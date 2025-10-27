// CareerSection.jsx
import CareerCard from "../../ui/cards/CareerCard";

export default function CareerSection() {
  const careers = [
    {
      title: "Career Coaching",
      description:
        "Get personalized guidance from industry experts to accelerate your career growth",
      tag: "Most Popular",
      tagColor: "purple",
      details: { duration: "3–6 months", investment: "From $99/session" },
      list: [
        "1 on 1 sessions with expert coaches",
        "Personalized career roadmaps",
        "Resume and interview prep",
        "Industry insights and networking",
        "Goal setting and progress tracking",
      ],
      buttonText: "Browse Sessions",
      navigateTo: "/career-coaching",
      images: ["/images/coaching.webp", "/images/work.jfif"],
    },
    {
      title: "Startup Internships",
      description:
        "Gain real world experience with innovative startups and build your professional network",
      tag: "High Demand",
      tagColor: "pink",
      details: { duration: "2–6 months", investment: "Paid positions" },
      list: [
        "Curated startup opportunities",
        "Remote and on-site positions",
        "Mentorship during internship",
        "Potential full time offers",
        "Portfolio project development",
      ],
      buttonText: "View Opportunities",
      navigateTo: "/startup-internships",
      images: ["/images/team.jpg", "/images/internship.avif"],
    },
    {
      title: "MVP Labs",
      description:
        "Turn your innovative ideas into funded startups with our comprehensive incubator program",
      tag: "Exclusive",
      tagColor: "blue",
      details: { duration: "6–12 months", investment: "Equity-based" },
      list: [
        "Up to $50K seed funding",
        "Expert mentor network",
        "Technical and business support",
        "Pitch deck development",
        "Go-to-market strategy",
      ],
      buttonText: "Submit Idea",
      navigateTo: "/mvp-labs",
      images: ["/images/mvp.webp", "/images/work-idea.jpg"],
    },
  ];

  return (
    <section className="career-path">
      <div className="container">
        <h2 className="section-title">Choose Your Career Path</h2>
        <p className="section-subtitle">
          Explore our three main tracks designed to accelerate your professional growth
        </p>

        <div className="cards">
          {careers.map((career, index) => (
            <CareerCard key={index} {...career} />
          ))}
        </div>
      </div>
    </section>
  );
}
