
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function StatsSection() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const stats = [
    { value: 10000, label: t("stats.students")  },
    { value: 500, label: t("stats.partners") },
    { value: 200, label: t("stats.coaches")  },
    { value: 95, label: t("stats.success"), suffix: "%" },
  ];

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
      <div className="bg">

      <div className="stats-grid container">
        {stats.map((item, i) => (
          <StatCard
            key={i}
            value={item.value}
            label={item.label}
            visible={visible}
            suffix={item.suffix}
          />
        ))}
      </div>
            </div>

    </section>
  );
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCard({ value, label, visible, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!show) return;
    const duration = 1400;
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
    <div ref={cardRef} className={`stat-card ${show ? "visible" : ""}`}>
      <div className="stat-value">
        {count}
        <span className="plus">{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}
