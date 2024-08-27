import ChoicesCard from "./ChoicesCard";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
const QuestionCard = ({
    questions,
    handleChoices,
    is_admin,
    handleAddChoices,
    handleDeleteQuestion,
}) => {
    return (
        <>
            <div className="flex flex-wrap mx-[7rem]">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className="mx-[1rem] "
                        onClick={() => handleChoices(question)}
                    >
                        <div className=" bg-white sm:rounded-lg  m-6 p-7 cursor-pointer w-[20rem]">
                            {question.choices && is_admin ? (
                                <div className="flex justify-between">
                                    <div>
                                        <button
                                            onClick={handleAddChoices}
                                            className="text-[15px] text-blue-500"
                                        >
                                            Add Choices
                                        </button>{" "}
                                    </div>
                                    <div>
                                        <button
                                            onClick={handleAddChoices}
                                            className="text-[20px] text-green-500 px-2"
                                        >
                                            <MdOutlineModeEdit />
                                        </button>
                                        <button
                                            onClick={()=>handleDeleteQuestion(question.id)}
                                            className="text-[20px] text-red-500 px-2"
                                        >
                                            <MdOutlineDelete />
                                            {question.id}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <br />
                            )}

                            <h1 className="font-bold text-[20px] p-4">
                                {question.question}
                            </h1>
                            <ChoicesCard question={question} />
                        </div>
                        <div></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default QuestionCard;
