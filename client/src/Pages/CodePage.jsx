import { useState, useEffect } from "react";
import axios from "axios";
import CodeInstructions from "../Components/CodingComponents/codeInstructions";

const CodePage = () => {
  const [codeContent, setCodeContent] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    fetchCode();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const fetchCode = async () => {
    try {
      const response = await axios.get("http://localhost:5000/app/getproblems");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setCodeContent(response.data);
      console.log("Response:", response.data); // Log the response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleStartTimer = () => {
    setTimer(120); // 2 minutes in seconds
  };

  return(
    <>
    <CodeInstructions />
    </>
  );

  // return (
  //   <>
  //     <header>
  //       <div className="mx-auto max-w-screen-xl px-2 py-5 sm:px-6 sm:py-12 lg:px-8">
  //         <div className="sm:flex sm:items-center sm:justify-between">
  //           <div className="text-center sm:text-left">
  //             <h1 className="text-2xl font-bold text-[#00df9a] sm:text-3xl">
  //               Coding test
  //             </h1>
  //           </div>

  //           <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
  //             <button
  //               className="block rounded-lg bg-[#00df9a] px-5 py-3 text-lg font-large text-black transition focus:outline-none focus:ring"
  //               type="button"
  //               onClick={handleStartTimer}
  //               disabled={timer > 0}
  //             >
  //               <div className="text-lg font-bold">
  //                 {timer > 0
  //                   ? `${Math.floor(timer / 60)}:${timer % 60}`
  //                   : "Start Timer"}
  //               </div>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </header>

  //     <div className="text-white">
  //       {codeContent ? (
  //         <div>
  //           <h2>Coding Problem</h2>
  //           <p>
  //             <strong>ID:</strong> {codeContent.id}
  //           </p>
  //           <p>
  //             <strong>Title:</strong> {codeContent.question_title}
  //           </p>
  //           <p>
  //             <strong>Statement:</strong> {codeContent.question_text}
  //           </p>
  //           <p>
  //             <strong>Example Input:</strong> {codeContent.example_input}
  //           </p>
  //           <p>
  //             <strong>Example Output:</strong> {codeContent.example_output}
  //           </p>
  //           <p>
  //             <strong>Constraints:</strong> {codeContent.constraints}
  //           </p>
  //           <p>
  //             <strong>Topic:</strong> {codeContent.topic}
  //           </p>
  //           <p>
  //             <strong>Difficulty:</strong> {codeContent.difficulty}
  //           </p>
  //           <p>
  //             <strong>Created At:</strong>{" "}
  //             {new Date(codeContent.created_at).toLocaleDateString()}
  //           </p>
  //         </div>
  //       ) : (
  //         <p>Loading...</p>
  //       )}
  //     </div>
  //   </>
  // );
};

export default CodePage;
