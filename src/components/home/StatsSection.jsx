import { useEffect, useState, useRef } from "react";

export default function StatsSection() {
  const stats = [
    { value: 10000, label: "Students Placed", suffix: "+" },
    { value: 500, label: "Partner Startups", suffix: "+" },
    { value: 200, label: "Expert Coaches", suffix: "+" },
    { value: 95, label: "Success Rate", suffix: "%" },
  ];

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-section">
      <div className="stats-container">
        <div className="stats-text">
          <p>We speak with our powerful statistics</p>
        </div>

        <div className="stats-items">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              label={item.label}
              suffix={item.suffix}
              visible={visible}
              index={index}
            />
          ))}
        </div>

        <img src="../images/5.svg" alt="pattern" className="pattern-svg" />
      </div>
    </section>
  );
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCard({ value, label, suffix, visible, index }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShow(true), index * 200);
      }
    });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [visible, index]);

  useEffect(() => {
    if (!show) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const prog = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(prog);
      const current = Math.round(value * eased);
      setCount(current);
      if (prog < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [show, value]);

  return (
    <div ref={cardRef} className="stat-card">
      <h2>
        {count}
        <span className="suffix">{suffix}</span>
      </h2>
      <p>{label}</p>
    </div>
  );
}
