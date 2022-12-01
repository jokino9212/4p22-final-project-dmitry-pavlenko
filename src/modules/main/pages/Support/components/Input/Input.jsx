import classNames from 'classnames';
import s from './Input.module.sass';

const Input = (props) => {
  const { value, onChange, placeholder, isInvalid, errorMessage} = props;
  return (
  <div className={s.root}>
   {isInvalid ? <div className={s.errorMsg}>{errorMessage}</div> : null}
    
    <input
      className={classNames(s.inputDefault, { [s.inputError]: isInvalid })}
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
  )
};
export default Input;
