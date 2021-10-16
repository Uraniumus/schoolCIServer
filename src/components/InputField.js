import './InputField.css';

function InputField({inputClass, label, isReq=false, holder, error, onChange, onBlur}) {
  return (
    <div className="InputField">
    <label className="field__label">
        {label} {isReq ? <span className="required">*</span> : null}
        <input className={inputClass} type="text" name="name" placeholder={holder} onChange={onChange} onBlur={onBlur}/>
        {error && <div>{error}</div>}
    </label>
    </div>
  );
}

export default InputField;
