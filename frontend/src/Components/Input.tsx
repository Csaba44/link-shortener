interface InputProps {
  placeholder?: string;
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ placeholder = "", prefix = "" }) => {
  return (
    <div className="input-container">
      {prefix != "" ? <span className="prefix">{prefix}</span> : ""}
      <input type="text" className="input-field" placeholder={placeholder} />
    </div>
  );
};

export default Input;
