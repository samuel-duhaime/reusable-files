const TextInput = ({
  id,
  type = "text",
  label,
  placeholder,
  pattern,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
