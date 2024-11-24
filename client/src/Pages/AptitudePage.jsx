import { useState, useEffect } from "react";
import axios from "axios";

const AptitudeContent = () => {
  const [contents, setContents] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    fetchData();
  }, [currentQuestion]);

  useEffect(() => {
    let interval = null;
    if (timer.minutes === 0 && timer.seconds === 0) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer.seconds === 0) {
            if (prevTimer.minutes === 0) {
              clearInterval(interval);
              return prevTimer;
            } else {
              return { minutes: prevTimer.minutes - 1, seconds: 59 };
            }
          } else {
            return { ...prevTimer, seconds: prevTimer.seconds - 1 };
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/app/aptitude");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setContents((prevContents) => [...prevContents, response.data]);
      console.log("Response:", response.data); // Log the response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const checkData = async (questionId, selectedOption) => {
    try {
      // Send payload in the specified format
      const response = await axios.post(
        "http://localhost:5000/app/checkanswer",
        {
          questionId: questionId,
          providedAnswer: selectedOption,
        }
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      console.log("Response:", response.data); // Log the response data
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      console.log("Submitting answers...");
      // Perform submission logic here
    }
  };

  const handlePreviousClick = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleOptionChange = (questionId, option) => {
    console.log("Question ID:", questionId, "Option:", option);
    checkData(questionId, option);
  };

  const renderQuestionButtons = () => {
    const buttonCount = 10;
    const buttons = [];

    for (let i = 0; i < buttonCount; i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 rounded-md ${
            currentQuestion === i
              ? "bg-[#00df9a] text-black"
              : "bg-black text-white"
          }`}
          onClick={() => setCurrentQuestion(i)}
        >
          {i + 1}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-2 py-5 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-[#00df9a] sm:text-3xl">
                Aptitude test
              </h1>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-[#00df9a] px-5 py-3 text-lg font-large text-black transition focus:outline-none focus:ring"
                type="button"
              >
                <div className="text-lg font-bold">
                  Timer: {timer.minutes}:
                  {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {contents.length > 0 && (
        <>
          <h2 className="text-lg font-bold mb-4 text-white text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
            {contents[currentQuestion].question_text}
          </h2>
          <div className="flex justify-center">
            <fieldset className="w-1/2 mt-10">
              <div className="space-y-2">
                {["a", "b", "c", "d"].map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`Option${index + 1}`}
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="radio"
                        className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                        id={`Option${index + 1}`}
                        name="options"
                        onChange={() =>
                          handleOptionChange(
                            contents[currentQuestion].id,
                            option.toUpperCase() // Convert option to uppercase
                          )
                        }
                      />
                    </div>
                    <div>
                      <strong className="font-medium text-gray-900 dark:text-white">
                        {contents[currentQuestion][`option_${option}`]}
                      </strong>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </>
      )}
      <br />
      <div className="flex justify-around">
        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          onClick={handlePreviousClick}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          onClick={handleNextClick}
          disabled={
            currentQuestion === contents.length - 1 || currentQuestion === 9
          }
        >
          {currentQuestion === 9 ? "Submit" : "Next"}
        </button>
      </div>
      <br />
      <div className="flex items-center justify-center mt-4">
        {renderQuestionButtons()}
      </div>
    </>
  );
};

export default AptitudeContent;
