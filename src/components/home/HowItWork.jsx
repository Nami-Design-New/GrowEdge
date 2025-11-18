import  { useEffect, useRef } from "react";

export default function HowItWork() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("revealed");
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const steps = [
    {
      title: "Choose Your Track",
      desc: "Select from Career Coaching, Startup Internships, or MVP Labs based on your goals.",
      time: "Step 01",
    },
    {
      title: "Get Matched",
      desc: "Our algorithm connects you with the perfect coach, startup, or funding opportunity.",
      time: "Step 02",
    },
    {
      title: "Achieve Success",
      desc: "Follow your personalized plan and track your progress towards your career goals.",
      time: "Step 03",
    },
  ];

  return (
    <section ref={ref} className="howitwork-section" aria-label="How it works">
      <div className="howitwork-inner container">
        <div className="howitwork-left">
          <span className="kicker">PROCESS</span>
          <h2 className="hw-title">How SkillBridge Works</h2>
          <p className="hw-lead">
  A focused, repeatable process that takes you from discovery to delivery: define goals, map a clear roadmap, then build, test and launch with ongoing checkpoints and support.
          </p>

          <a className="btn hw-cta" href="/signup">
            Get Started <i className="fas fa-arrow-right"></i>
          </a>
        </div>

     <div className="howitwork-timeline" aria-hidden="true">
  <svg
    className="timeline-svg"
    viewBox="0 0 500 400"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {/* Shadow path */}
    <path
      d="
        M 180 60
        L 180 120
        L 400 120
        L 400 220
        L 240 220
        L 240 370
      "
      fill="none"
      stroke="#23254e"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.14"
    />
    {/* Main path */}
    <path
      d="
        M 180 60
        L 180 120
      L 400 120   
        L 400 220
        L 240 220
        L 240 370
      "
      fill="none"
      stroke="#23254e"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Steps */}
  {steps.map((s, idx) => (
    <div key={idx} className={`hw-step hw-step--${idx + 1}`}>
      <div className="hw-card">
        <div className="hw-step-no">{s.time}</div>
        <h4 className="hw-step-title">{s.title}</h4>
        <p className="hw-step-desc">{s.desc}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
