

const ChoicesCard = ({ question, auth }) => {

    return (
        <>
            <div className="mt-[2rem] ">
                <ol start={1}>
                    {question.choices.map((choice) => (
                        <li
                            key={choice.id}
                            className="text-start text-black m-[1rem]"
                        >
                            <div  className="bg-gray-500 rounded-lg px-6 text-gray-100 p-3">
                            {choice.user === auth.user.name ? `${choice.user} (you)` : choice.user}
                             <p className="text-[21px] font-semibold"> {choice.options}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>


        </>
    );
};

export default ChoicesCard;
