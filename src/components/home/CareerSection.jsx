
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CareerSection() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="career-path">
      <div className="container">
        <h2 className="section-title">Choose Your Career Path</h2>
        <p className="section-subtitle">
          Explore our three main tracks designed to accelerate your professional growth
        </p>

        <div className="cards">
          <div className="card">
            <div className="image-slider">
              <Slider {...sliderSettings}>
                <img src="/images/coaching.webp" alt="Career Coaching 1" />
                <img src="/images/work.jfif" alt="Career Coaching 2" />
              </Slider>
            </div>

            <div className="tag purple">Most Popular</div>
            <h3>Career Coaching</h3>
            <p>
              Get personalized guidance from industry experts to accelerate your career growth
            </p>

            <div className="details">
              <p>
                <strong>DURATION:</strong> 3–6 months
              </p>
              <p>
                <strong>INVESTMENT:</strong> From $99/session
              </p>
            </div>

            <ul>
              <li>1 on 1 sessions with expert coaches</li>
              <li>Personalized career roadmaps</li>
              <li>Resume and interview prep</li>
              <li>Industry insights and networking</li>
              <li>Goal setting and progress tracking</li>
            </ul>

            <button className="btn">Browse Sessions</button>
          </div>

          <div className="card">
            <div className="image-slider">
              <Slider {...sliderSettings}>
                <img src="/images/team.jpg" alt="Startup Internship 1" />
                <img src="/images/internship.avif" alt="Startup Internship 2" />
              </Slider>
            </div>

            <div className="tag pink">High Demand</div>
            <h3>Startup Internships</h3>
            <p>
              Gain real world experience with innovative startups and build your professional
              network
            </p>

            <div className="details">
              <p>
                <strong>DURATION:</strong> 2–6 months
              </p>
              <p>
                <strong>INVESTMENT:</strong> Paid positions
              </p>
            </div>

            <ul>
              <li>Curated startup opportunities</li>
              <li>Remote and on-site positions</li>
              <li>Mentorship during internship</li>
              <li>Potential full time offers</li>
              <li>Portfolio project development</li>
            </ul>

            <button className="btn">View Opportunities</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="image-slider">
              <Slider {...sliderSettings}>
                <img src="/images/mvp.webp" alt="MVP Lab 1" />
                <img src="/images/work-idea.jpg" alt="MVP Lab 2" />
              </Slider>
            </div>

            <div className="tag blue">Exclusive</div>
            <h3>MVP Labs</h3>
            <p>
              Turn your innovative ideas into funded startups with our comprehensive incubator
              program
            </p>

            <div className="details">
              <p>
                <strong>DURATION:</strong> 6–12 months
              </p>
              <p>
                <strong>INVESTMENT:</strong> Equity-based
              </p>
            </div>

            <ul>
              <li>Up to $50K seed funding</li>
              <li>Expert mentor network</li>
              <li>Technical and business support</li>
              <li>Pitch deck development</li>
              <li>Go-to-market strategy</li>
            </ul>

            <button className="btn">Submit Idea</button>
          </div>
        </div>
      </div>
    </section>
  );
}
