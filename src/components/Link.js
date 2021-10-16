import './Link.css';

function Link({text, className, link}) {
  return (
    <a className={className} href={link}> {text} </a>
  );
}

export default Link;