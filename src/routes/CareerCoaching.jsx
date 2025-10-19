import React from "react";
import SectionHeader from "../ui/SectionHeader";
import SearchBar from "../ui/SearchBar";
import SessionCard from "../ui/cards/SessionCard";
import { useTranslation } from "react-i18next";

export default function CareerCoaching() {
  const { t } = useTranslation();

  const sessions = [
    {
      id: 1,
      title: "Software Engineering Career Strategy",
      category: "Technology",
      coach: "Sarah Johnson",
      role: "Senior Engineering Manager at Google",
      rating: 4.9,
      reviews: 127,
      duration: "60 min",
      price: 150,
      description:
        "Comprehensive career planning for software engineers looking to advance to senior and leadership roles.",
      tags: ["software engineering", "career growth", "leadership"],
      mode: "Remote or In-person",
      next: "Mon 2-5 PM",
      spots: 3,
    },
    {
      id: 2,
      title: "Product Management Fundamentals",
      category: "Product",
      coach: "Michael Chen",
      role: "VP of Product at Airbnb",
      rating: 4.8,
      reviews: 89,
      duration: "90 min",
      price: 200,
      description:
        "Learn the core principles of product management from ideation to market launch.",
      tags: ["product management", "strategy", "user research"],
      mode: "Remote",
      next: "Tue 3-6 PM",
      spots: 2,
    },
     {
      id: 3,
      title: "Product Management Fundamentals",
      category: "Product",
      coach: "Michael Chen",
      role: "VP of Product at Airbnb",
      rating: 4.8,
      reviews: 89,
      duration: "90 min",
      price: 200,
      description:
        "Learn the core principles of product management from ideation to market launch.",
      tags: ["product management", "strategy", "user research"],
      mode: "Remote",
      next: "Tue 3-6 PM",
      spots: 2,
    },
    {
  id: 4,
  title: "UX Design Portfolio Review",
  category: "Design",
  coach: "Emma Thompson",
  role: "Principal UX Designer at Figma",
  rating: 4.8,
  reviews: 92,
  duration: "60 min",
  price: "$125",
  description:
    "Get expert feedback on your UX portfolio and learn how to showcase your work effectively.",
  tags: ["UX design", "portfolio", "design thinking"],
  mode: "Remote or In-person",
  next: "Tue 1-4 PM",
  spots: 2,
},

  ];

  return (
    <div className="career-coaching">
      <SectionHeader
        title={t("careerCoaching.title")}
        subtitle={t("careerCoaching.subtitle")}
      />
      <SearchBar />

      <div className="container career-cards">
        <div className="row">
        {sessions.map((s, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-12 mt-4">
            <SessionCard {...s} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
