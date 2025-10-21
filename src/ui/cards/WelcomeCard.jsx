// src/components/dashboard/WelcomeCard.jsx
export default function WelcomeCard({ name, message }) {
  return (
    <div className="welcome-card">
      <h2 className="welcome-title">Welcome back, {name}!</h2>
      <p className="welcome-message">{message}</p>
    </div>
  );
}
