import { Fieldset, Button, Checkbox } from "@headlessui/react";
import { useState } from "react";

const CodeInstructions = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 sm:py-16">
      <h1 className="text-2xl font-bold leading-7 text-gray-200 mb-8 sm:mb-10 sm:truncate sm:text-3xl sm:tracking-tight relative cursor-pointer hover:text-gray-400 transition-all ease-in-out before:transition-all before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[5px] before:w-0 hover:before:w-[70%] before:bottom-[-2px] before:left-1/2 before:-translate-x-1/2 flex justify-center py-2">
        Exam Instructions
      </h1>
      <div className="w-full max-w-3xl px-4">
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
          <p className="text-white">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                You would be provided with a user name and password. You need to
                enter the username and password and then enter the Captcha shown
                on the screen. After that, you can accept the terms of use and
                Privacy policy of the website and click on the Login button to
                proceed ahead.
              </li>
              <li>
                As soon as you click on the Proceed button, you will be shown
                the details of the exam:
                <ul className="list-disc list-inside pl-5 space-y-2">
                  <li>Exam name</li>
                  <li>Programming exam name</li>
                  <li>Start date</li>
                  <li>End date</li>
                  <li>Total number of questions</li>
                  <li>Total duration associated with the exam</li>
                </ul>
                You can click on the Proceed button to proceed ahead. As soon as
                you click on the Proceed button, you will be shown the details
                of the exam including your name and your Roll number. You need
                to confirm that your name and Roll number are valid. Then you
                can click on the Confirm button to proceed.
              </li>
              <li>
                Exam questions and a coding text area would be shown to you
                during the exam. Each question has various information
                attributes:
                <ul className="list-disc list-inside pl-5 space-y-2">
                  <li>
                    <strong>Problem Statement:</strong> It provides a detailed
                    description.
                  </li>
                  <li>
                    <strong>Example:</strong> It provides an example of the
                    program code.
                  </li>
                  <li>
                    <strong>Functional Description:</strong> It provides
                    functional details of the code to be written.
                  </li>
                  <li>
                    <strong>Returns:</strong> It provides details of the
                    expected output of the code (what the code should return
                    after execution).
                  </li>
                </ul>
              </li>
            </ol>
          </p>

          <div className="flex items-center">
            <Checkbox
              checked={enabled}
              onChange={setEnabled}
              className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
            >
              <svg
                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <span className="ml-2 text-white">
              I have read and understood the instructions
            </span>
          </div>

          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700 mt-4">
            Proceed
          </Button>
        </Fieldset>
      </div>
    </div>
  );
};

export default CodeInstructions;
