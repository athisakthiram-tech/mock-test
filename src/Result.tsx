import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();

  const score = state?.score || 0;
  const total = state?.total || 0;

  let message = "";

  if (score >= total * 0.8) {
    message =
      "Excellent! Keep it up. TNPSC success is within reach.";
  } else if (score >= total * 0.5) {
    message =
      "Good effort. Practice a little more and you'll improve.";
  } else {
    message =
      "Don't worry. Every test helps you learn and grow.";
  }

  return (
    <div className="container mt-5 text-center">
      <h1>Your Score</h1>

      <h2>
        {score} / {total}
      </h2>

      <div className="alert alert-info mt-4">
        {message}
      </div>
    </div>
  );
}

export default Result;