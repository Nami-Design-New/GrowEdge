export default function AchievementsCard({ achievements }) {
  return (
    <div className="card-box">
      <h6 className="fw-bold mb-3">Achievements</h6>
      <ul className="achievements-list mb-0">
        {achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
