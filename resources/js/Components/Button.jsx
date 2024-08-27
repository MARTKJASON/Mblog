const Button = ({ text }) => {
    return (
      <button
        type="submit"
        className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600  focus:ring-primary-800"
      >
        {text}
      </button>
    );
  };
  export default Button;
