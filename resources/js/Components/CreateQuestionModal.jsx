import React, { useState } from 'react';

const CreateQuestionModal = ({ isOpen, onClose, onSave, category_id }) => {
  const [question, setQuestion] = useState('');
  const [correct_answer, setAnswer] = useState('');
  const handleSave = () => {
    onSave({ question, correct_answer  ,category_id });
    setQuestion('');
    setAnswer('');
    onClose();

  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center pb-2">
                <h2 className="text-lg font-bold">Create Question</h2>
                <span
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  &times;
                </span>
              </div>
              <div className="pb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Question:
                </label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Correct Answer:
                </label>
                <input
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={correct_answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateQuestionModal;
