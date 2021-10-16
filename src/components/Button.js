import '../common.css';
import './Button.css';

function Button({text, className, href, onClick, isLoading=false}) {
  let classes = isLoading ? className + " inactive" : className;
  return (
    <a className = {classes} href={href} onClick={onClick}>
      <i></i> <span>{text}</span>
    </a>
  );
}

export default Button;
