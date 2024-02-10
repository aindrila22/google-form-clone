"use client";

import Nav from "@/components/Navbar";
import React, { useState } from "react";
import Question from "./Question";
import Edit from "./Edit";

const Form = () => {
  const [title, setTitle] = useState<string>("Untitled Form");
  const [desc, setDesc] = useState<string>("");
  const [questions, setQuestions] = useState<Array<string>>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  const addQuestion = () => {
    setQuestions([...questions, ""]);
    setActiveQuestionIndex(questions.length);
  };

  const updateQuestion = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };
  const deleteQuestion = (index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
    if (activeQuestionIndex !== null) {
      setActiveQuestionIndex(index === questions.length - 1 ? index - 1 : null);
    }
  };

  return (
    <div>
      <Nav />
      <div className="bg-[#20A07D]/10 w-full grid mx-auto min-h-screen pb-10">
        <div className="w-full block mx-auto h-full">
          <div className="flex justify-center items-center max-w-3xl mx-auto">
            <div className="border-t-8 rounded-md my-6 border-[#20A07D] bg-white max-w-2xl shadow w-full grid place-items-center mx-auto">
              <div className="w-full border border-gray-300">
                <div className="w-full px-6 py-2">
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title ?? ""}
                    required
                    className="text-3xl outline-none font-bold capitalize border-b 
                focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-[#1D9B69]"
                  />
                </div>
                <div className="w-full px-6 py-1 mb-6">
                  <input
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc ?? ""}
                    required
                    placeholder="Form Description"
                    className="text-base outline-none font-medium capitalize border-b 
                focus:border-b-2 border-gray-200 focus:border-[#1D9B69] py-1 w-full"
                  />
                </div>
              </div>
            </div>
            {questions.length === 0 && (
              <Edit
                handleAdd={addQuestion}
                show
                handleDelete={() => deleteQuestion(questions.length - 1)}
              />
            )}
          </div>
          <div className="relative">
            {questions.map((question, index) => (
              <Question
                key={index}
                index={index}
                value={question}
                onUpdate={updateQuestion}
                addQuestion={addQuestion}
                handleDelete={() => deleteQuestion(questions.length - 1)}
                isActiveQuestion={index === activeQuestionIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
