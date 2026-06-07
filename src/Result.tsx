import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();

  const score = state?.score || 0;
  const total = state?.total || 0;
  const answers = state?.answers || {};
  const questions = state?.questions || [];

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
    <div className="container mt-4">
      <div className="text-center">
        <h1>Your Score</h1>

        <h2>
          {score} / {total}
        </h2>

        <div className="alert alert-info mt-3">
          {message}
        </div>
      </div>

      <hr />

      <h3>Review Answers</h3>

      {questions.map((q: any) => {
        const isCorrect =
          answers[q.id] === q.answer;

        return (
          <div
            key={q.id}
            className="card mt-3"
          >
            <div className="card-body">
              <h5>
                Q{q.id}. {q.question}
              </h5>

              <p>
                <strong>Your Answer:</strong>{" "}
                {answers[q.id] || "Not Answered"}
              </p>

              <p>
                <strong>Correct Answer:</strong>{" "}
                {q.answer}
              </p>

              {isCorrect ? (
                <div className="alert alert-success">
                  Correct ✅
                </div>
              ) : (
                <div className="alert alert-danger">
                  Wrong ❌
                </div>
              )}

              {q.explanation && (
                <div className="alert alert-warning">
                  <strong>Explanation:</strong>{" "}
                  {q.explanation}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;