import { useState } from "react";
import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationCard from "./ApplicationCard";

const candidates = [
  {
    name: "Sarah Chen",
    status: "interview",
    rating: 4.5,
    university: "Stanford University",
    position: "Frontend Developer Intern",
    location: "San Francisco, CA",
    applied: "3/15/2024",
    skills: ["React", "TypeScript", "Python", "Node.js", "SQL"],
  },
  {
    name: "David Martinez",
    status: "final",
    rating: 4.8,
    university: "University of Texas at Austin",
    position: "Data Science Intern",
    location: "Austin, TX",
    applied: "3/12/2024",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas"],
  },
  {
    name: "Emma Johnson",
    status: "reviewing",
    rating: 4.2,
    university: "University of Washington",
    position: "Product Design Intern",
    location: "Seattle, WA",
    applied: "3/10/2024",
    skills: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research"],
  },
  {
    name: "Alex Thompson",
    status: "offer",
    rating: 4.9,
    university: "MIT",
    position: "Frontend Developer Intern",
    location: "Boston, MA",
    applied: "3/8/2024",
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
  },
];

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition =
      filterPosition === "" ||
      c.position.toLowerCase().includes(filterPosition.toLowerCase());
    const matchesStatus =
      filterStatus === "" || c.status === filterStatus;

    return matchesSearch && matchesPosition && matchesStatus;
  });

  return (
    <div className="applications-page">
      <ApplicationsHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterPosition={filterPosition}
        setFilterPosition={setFilterPosition}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <div className="cards-grid">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate, index) => (
            <ApplicationCard key={index} candidate={candidate} />
          ))
        ) : (
          <p className="no-results">No candidates found </p>
        )}
      </div>
    </div>
  );
}
