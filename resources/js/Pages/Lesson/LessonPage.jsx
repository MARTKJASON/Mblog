import CreateQuestionModal from "@/Components/CreateQuestionModal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import AddChoices from "./Components/AddChoice";

const LessonPage = ({ questions, categoryTitle, auth, categoryId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isAdmin = auth.user.is_admin;
    const Items = questions.length === 0;
    console.log(Items);
    // console.log(categoryId);
    const [option, setOption] = useState(false);
    const [questionId , setQuestionId] = useState(0)

    const handleAddChoices = () => {
        setOption(true);
    };
    const handleClose = () => {
        setOption(false);
    };

    const handleChoices = (question) => {
        // console.log(question.choices);
        setQuestionId(question.id)
        // console.log(questionId)
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleClick = () => {
        setIsOpen(true);
    };
    const onSave = (NewQuestion) => {
        console.log(NewQuestion);
        Inertia.post(`/category/${categoryId}/questions`, NewQuestion);
    };
    const handleSaveOption = (options) => {
            Inertia.post(`/category/${categoryId}/questions/${questionId}/add`, { options, question_id:questionId })
            console.log({options, question_id:questionId});
            setOption(false);

    };

    const handleDeleteQuestion = (question_id) => {
        // setQuestionId(question.id)
        alert(question_id)
        Inertia.delete(`/category/${categoryId}/questions/${question_id}`)


    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <AddChoices
                open={option}
                handleClose={handleClose}
                handleSaveOption={handleSaveOption}

            />
            <section>
                <CreateQuestionModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    onSave={onSave}
                    category_id={categoryId}
                />
                <div className="container mx-auto p-4 mt-[4rem]">
                    <h1 className="text-3xl text-center font-bold mb-9">
                        {categoryTitle}
                    </h1>
                    {isAdmin ? (
                        <button
                            onClick={handleClick}
                            className="text-green-500 hover:green-red-800 ml-[10rem]"
                        >
                            Add a Question
                        </button>
                    ) : (
                        <br />
                    )}
                    {Items ? (
                        <h1 className="text-[20px]  text-center font-bold">
                            No Questions
                        </h1>
                    ) : (
                        <QuestionCard
                            questions={questions}
                            handleChoices={handleChoices}
                            is_admin={isAdmin}
                            handleAddChoices={handleAddChoices}
                            handleDeleteQuestion={handleDeleteQuestion}
                        />
                    )}
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default LessonPage;
