import React, { useState } from 'react';

const questions = [
  {
    question: "How often have you felt overwhelmed this week?",
    options: ["Rarely", "Sometimes", "Often", "Almost Always"],
  },
  {
    question: "How well are you sleeping lately?",
    options: ["Very well", "Okay", "Not great", "Terribly"],
  },
  {
    question: "Do you feel supported by people around you?",
    options: ["Always", "Often", "Sometimes", "Rarely"],
  },
  {
    question: "How often do you feel anxious during the day?",
    options: ["Never", "1–2 times", "3–5 times", "Constantly"],
  },
  {
    question: "Are you able to concentrate easily?",
    options: ["Yes", "Mostly", "Rarely", "Not at all"],
  }
];

const MentalHealthQuiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions.");
      return;
    }

    setSubmitted(true);
  };

  const getResult = () => {
    const score = answers.reduce((acc, answer) => acc + parseInt(answer), 0);
    if (score <= 5) return "You appear to be in a stable mental state. Keep up your healthy habits!";
    if (score <= 10) return "You may be experiencing moderate stress or anxiety. Consider speaking with a trusted adult or mental health resource.";
    return "You may be under significant stress. We recommend reaching out to a professional or using YouthWell support tools.";
  };

  if (submitted) {
    return (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-heroBg">Your Result</h4>
        <p className="text-gray-700">{getResult()}</p>
      </div>
    );
  }

  return (
    <form className="space-y-6">
      {questions.map((q, idx) => (
        <div key={idx}>
          <p className="mb-2 font-medium text-black">{idx + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`q-${idx}`}
                  value={i}
                  checked={answers[idx] === `${i}`}
                  onChange={() => handleChange(idx, `${i}`)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded font-medium"
      >
        Submit
      </button>
    </form>
  );
};

export default MentalHealthQuiz;
