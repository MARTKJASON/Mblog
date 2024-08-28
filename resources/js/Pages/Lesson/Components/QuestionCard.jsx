import ChoicesCard from "./ChoicesCard";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
const QuestionCard = ({
    questions,
    handleChoices,
    is_admin,
    handleAddChoices,
    auth,
}) => {
    return (
        <>
            <div className="w-[5rem] ">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className="mx-[1rem] "
                        onClick={() => handleChoices(question)}
                    >
                        <div className=" bg-white sm:rounded-lg  m-6 p-7 cursor-pointer w-[80rem]">
                            {question.choices ? (
                                <div className="flex justify-between">
                                    <div>
                                        <button
                                            onClick={handleAddChoices}
                                            className="text-[15px] text-blue-500"
                                        >
                                            Reply this Thread
                                        </button>{" "}
                                    </div>

                                </div>
                            ) : (
                                <br />
                            )}

                            <h1 className="font-bold text-[20px] p-4">
                                {question.question}
                            </h1>
                            <p  className=" px-7">{question.correct_answer}</p>

                            <ChoicesCard question={question} auth={auth}
                            />
                        </div>
                        <div></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default QuestionCard;
