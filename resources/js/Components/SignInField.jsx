const SignInField = ({
    id,
    isAdmin,
    type,
    name,
    value,
    placeholder,
  }) => {
    return (
      <div>
        <label
          id={id}
          className={clsx('block mb-2 text-sm font-medium ', {
            'text-white': isAdmin === true,
            'text-gray-900': !isAdmin,
          })}
        >
          {value}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className={clsx('sm:text-sm rounded-lg border w-full p-2.5', {
            ' lock  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500':
              isAdmin === true,
            'bg-gray-50  border-gray-300 text-gray-900   focus:ring-primary-600 focus:border-primary-600 block ':
              !isAdmin,
          })}
          placeholder={placeholder}
        />
      </div>
    );
  };
  export default SignInField;
