import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { economicsQuestions } from "../data/economicsQuestions";
import { geographicQuestions1 } from "../data/geographicQuestions1";
import { geographicQuestions2 } from "../data/geographicQuestions2";

function TestPage() {
  const navigate = useNavigate();

  const questionBank = {
    economics: economicsQuestions,
    geography1: geographicQuestions1,
    geography2: geographicQuestions2,
  };

  const { subject } = useParams();

  const questions =
    questionBank[
      subject as keyof typeof questionBank
    ] || [];

  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("currentIndex");
    return saved ? JSON.parse(saved) : 0;
  });

  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem("answers");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "currentIndex",
      JSON.stringify(currentIndex)
    );
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem(
      "answers",
      JSON.stringify(answers)
    );
  }, [answers]);

  if (questions.length === 0) {
    return <h2>Subject not found</h2>;
  }

  const question = questions[currentIndex];

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    localStorage.removeItem("currentIndex");
    localStorage.removeItem("answers");

    navigate("/result", {
      state: {
        score,
        total: questions.length,
        answers,
        questions,
      },
    });
  };

  return (
    <div className="container mt-4">
      <h2>{subject?.toUpperCase()} Test</h2>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <div className="card">
        <div className="card-body">
          <h5>{question.question}</h5>

          {question.options.map((option) => (
            <div
              className="form-check mt-2"
              key={option}
            >
              <input
                className="form-check-input"
                type="radio"
                name={`question-${question.id}`}
                checked={
                  answers[question.id] === option
                }
                onChange={() =>
                  setAnswers({
                    ...answers,
                    [question.id]: option,
                  })
                }
              />

              <label className="form-check-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentIndex === 0}
          onClick={() =>
            setCurrentIndex(currentIndex - 1)
          }
        >
          Previous
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            className="btn btn-primary"
            onClick={() =>
              setCurrentIndex(currentIndex + 1)
            }
          >
            Next
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default TestPage;