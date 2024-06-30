import { useState } from "react";
import { useEffect } from "react";
import css from "./App.module.css";

import Descriptions from "./Descriptions/Descriptions";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [response, setResponse] = useState(() => {
    const res = JSON.parse(window.localStorage.getItem("response"));
    if (res !== null) {
      return res;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("response", JSON.stringify(response));
  }, [response]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      return setResponse({ good: 0, neutral: 0, bad: 0 });
    }
    setResponse({ ...response, [feedbackType]: response[feedbackType] + 1 });
  };

  const { good, neutral, bad } = response;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback && Math.round((good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Descriptions />
      <Options toSetResponse={updateFeedback} totalResponse={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification>No feedback yet</Notification>
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalResponse={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
