import { useState } from "react";
import { Field, Input, Label, Select, Textarea, Fieldset, Legend, Description } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const CodingUpload = () => {
  const [formData, setFormData] = useState({
    questionTitle: "",
    questionText: "",
    topic: "",
    constraints: "",
    exampleInput: "",
    exampleOutput: "",
    difficulty: "Basic" // Default difficulty
  });

  const inputClass = clsx(
    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-[#00df9a]",
    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/app/uploadproblem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success
        console.log("Data uploaded successfully!");
      } else {
        // Handle error
        console.error("Failed to upload data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // console.log("Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-12">
      <div className="w-full max-w-lg px-4">
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
          <Legend className="relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-width before:ease-in-out before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 flex justify-center">
            Upload Question Details
          </Legend>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Question Title
            </Label>
            <Input className={inputClass} name="questionTitle" onChange={handleChange} value={formData.questionTitle} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Question Text
            </Label>
            <Description className="text-sm/6 text-white/50">
              Enter the question here for the problem you want to upload.
            </Description>
            <Textarea className={inputClass} rows={3} name="questionText" onChange={handleChange} value={formData.questionText} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">Topic</Label>
            <Input className={inputClass} name="topic" onChange={handleChange} value={formData.topic} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Constraints
            </Label>
            <Description className="text-sm/6 text-white/50">
              Enter the Constraints limit for the problem.
            </Description>
            <Input className={inputClass} name="constraints" onChange={handleChange} value={formData.constraints} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Example Input
            </Label>
            <Input className={inputClass} name="exampleInput" onChange={handleChange} value={formData.exampleInput} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Example Output
            </Label>
            <Input className={inputClass} name="exampleOutput" onChange={handleChange} value={formData.exampleOutput} />
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Difficulty
            </Label>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-[#1f201f] py-1.5 px-3 text-sm/6 text-[#00df9a]",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                  "*:text-white/50"
                )}
                name="difficulty"
                onChange={handleChange}
                value={formData.difficulty}
              >
                <option>Basic</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </Select>
              <ChevronDownIcon className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" aria-hidden="true" />
            </div>
          </Field>
        </Fieldset>

        <div className="text-center">
          <button type="button" onClick={handleSubmit} className="bg-[#00df9a] hover:bg-[#00df987a] hover:text-white w-[200px] items-center rounded-md font-medium my-6 py-3 text-black">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingUpload;
