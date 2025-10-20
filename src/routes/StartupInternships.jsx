import SectionHeader from "../ui/SectionHeader";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import InternshipCard from "../ui/cards/InternshipCard";

export default function StartupInternships() {
    const { t } = useTranslation();
    const internships = [
        {
            title: "Full-Stack Developer Intern",
            company: "TechFlow AI",
            funding: "Series A",
            location: "San Francisco, CA",
            salary: "$2500",
            duration: "3 months",
            description:
                "Join our growing team to build cutting-edge AI-powered workflow automation tools. You'll work on both frontend and backend systems.",
            skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "+1 more"],
            industry: "AI/ML",
            size: "15-25 employees",
            deadline: "4/15/2024",
            type: "full-time",
        },
        {
            title: "Product Marketing Intern",
            company: "HealthSync",
            funding: "Seed",
            location: "Boston, MA",
            salary: "$1800",
            duration: "4 months",
            description:
                "Help us revolutionize healthcare communication by developing go-to-market strategies for our patient care platform.",
            skills: ["Marketing", "Content Creation", "Analytics", "Communication", "+1 more"],
            industry: "HealthTech",
            size: "50-100 employees",
            deadline: "4/1/2024",
            type: "part-time",
        },
        {
            title: "Full-Stack Developer Intern",
            company: "TechFlow AI",
            funding: "Series A",
            location: "San Francisco, CA",
            salary: "$2500",
            duration: "3 months",
            description:
                "Join our growing team to build cutting-edge AI-powered workflow automation tools. You'll work on both frontend and backend systems.",
            skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "+1 more"],
            industry: "AI/ML",
            size: "15-25 employees",
            deadline: "4/15/2024",
            type: "full-time",
        },
        {
            title: "Product Marketing Intern",
            company: "HealthSync",
            funding: "Seed",
            location: "Boston, MA",
            salary: "$1800",
            duration: "4 months",
            description:
                "Help us revolutionize healthcare communication by developing go-to-market strategies for our patient care platform.",
            skills: ["Marketing", "Content Creation", "Analytics", "Communication", "+1 more"],
            industry: "HealthTech",
            size: "50-100 employees",
            deadline: "4/1/2024",
            type: "part-time",
        }
    ];
    return (
        <div className="startup-page">
            <SectionHeader
                title={t("startupInternships.title")}
                subtitle={t("startupInternships.subtitle")}
            />
            <div className="container">
                {/* Search input */}
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <Form.Control
                        type="text"
                        placeholder="Search Interships or Companies..."
                    />
                </div>
            </div>
            <div className="container startup-cards ">
                <div className="row">
                    {internships.map((item, idx) => (
                        <div key={idx} className=" col-md-6 col-12 mt-4">
                            <InternshipCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
