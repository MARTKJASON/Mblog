

const ChoicesCard = ({ question }) => {



    return (
        <>
            <div className="mt-[2rem] ">
                <ol start={1}>
                    {question.choices.map((choice) => (
                        <li
                            key={choice.id}
                            className="text-start text-black"
                        >
                            <button  className="bg-gray-500 rounded-lg m-2 text-gray-100 p-3">
                              {choice.options}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>


        </>
    );
};

export default ChoicesCard;
