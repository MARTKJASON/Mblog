const InputField = ({
    email,
    type,
    placeholder,
    name,
    id,
    isAdmin,
    value,
  }) => {
    return (
      <div
        className={clsx({
          'md:col-span-4': email === true,
          'md:col-span-2': !email,
        })}
      >
        <label id={id}>{value}</label>
        <input
          type={type}
          name={name}
          id={id}
          className={clsx('h-10 border mt-1 rounded px-4 w-full', {
            'bg-gray-700 border-gray-600 placeholder-gray-400 text-white ':
              isAdmin === true,
            'bg-gray-50': !isAdmin,
          })}
          placeholder={placeholder}
        />
      </div>
    );
  };
  export default InputField;
