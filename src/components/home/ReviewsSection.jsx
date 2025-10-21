import  { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReviewsSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const stories = [
    {
      tag: "Startup Internships",
      color: "#3ac47d",
      rating: 5,
      quote:
        "The internship at a cutting-edge AI startup opened doors I never imagined. Now working on revolutionary technology.",
      name: "Alex Thompson",
      role: "ML Engineer at OpenAI",
      location: "San Francisco, CA",
      initial: "A",
    },
    {
      tag: "Career Coaching",
      color: "#4F39F6",
      rating: 5,
      quote:
        "My career coach helped me transition from development to design leadership. The guidance was invaluable.",
      name: "Jasmine Patel",
      role: "UX Director at Adobe",
      location: "Los Angeles, CA",
      initial: "J",
    },
    {
      tag: "MVP Labs",
      color: "#b94ff6",
      rating: 5,
      quote:
        "Started with just an idea in MVP Labs. Now our platform serves over 100,000 students worldwide!",
      name: "Michael Kim",
      role: "CEO of EduTech Solutions",
      location: "Chicago, IL",
      initial: "M",
    },
    {
      tag: "Career Coaching",
      color: "#4F39F6",
      rating: 5,
      quote:
        "SkillBridge gave me clarity and confidence. I landed my dream role in less than 3 months!",
      name: "Laura Chen",
      role: "Product Manager at Google",
      location: "Seattle, WA",
      initial: "L",
    },
      {
      tag: "Career Coaching",
      color: "#4F39F6",
      rating: 5,
      quote:
        "My career coach helped me transition from development to design leadership. The guidance was invaluable.",
      name: "Jasmine Patel",
      role: "UX Director at Adobe",
      location: "Los Angeles, CA",
      initial: "J",
    },
    {
      tag: "MVP Labs",
      color: "#b94ff6",
      rating: 5,
      quote:
        "Started with just an idea in MVP Labs. Now our platform serves over 100,000 students worldwide!",
      name: "Michael Kim",
      role: "CEO of EduTech Solutions",
      location: "Chicago, IL",
      initial: "M",
    }
  ];

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const updateProgress = () => {
      const totalSlides = swiper.slides.length - swiper.params.slidesPerView + 1;
      const currentIndex = swiper.realIndex + 1;
      const percentage = (currentIndex / totalSlides) * 100;
      setProgress(percentage);
    };

    swiper.on("slideChange", updateProgress);
    updateProgress();

    return () => swiper.off("slideChange", updateProgress);
  }, []);

  return (
    <section className="success-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Success Stories</h2>
        </div>

        <p className="section-subtitle">
          Hear from students who transformed their careers with SkillBridge
        </p>

        {/* ===== Controls Row ===== */}
        <div className="controls-row">
          <div className="nav-btns">
            <button className="nav-btn" ref={prevRef}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn" ref={nextRef}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="custom-pagination"></div>
        </div>

        {/* ===== Swiper ===== */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          dir={lang === "ar" ? "rtl" : "ltr"}
          slidesPerView={3}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="stories-slider"
        >
          {stories.map((story, idx) => (
            <SwiperSlide key={idx}>
              <div className="story-card">
             <div className="story-top">
  <div
    className="story-tag"
    style={{ color: story.color, borderColor: story.color }}
  >
    {story.tag}
  </div>

  <div className="stars">
    {Array(story.rating)
      .fill()
      .map((_, i) => (
        <i
          key={i}
          className="fas fa-star"
          style={{ color: "#f6c700" }}
        ></i>
      ))}
  </div>
</div>


                <p className="story-quote">“{story.quote}”</p>

                <div className="story-author">
                  <div>
                    <h4>{story.name}</h4>
                    <p className="story-role">{story.role}</p>
                    <p className="story-location">
                      <i className="fas fa-map-marker-alt"></i> {story.location}
                    </p>
                  </div>
                  <div className="story-avatar">{story.initial}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="legend">
          <span style={{ color: "#4F39F6" }}>● Career Coaching</span>
          <span style={{ color: "#b94ff6" }}>● MVP Labs</span>
          <span style={{ color: "#3ac47d" }}>● Startup Internships</span>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
