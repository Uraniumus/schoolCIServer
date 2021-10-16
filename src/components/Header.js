import './Header.css';
import Button from './Button';

function Header({text, className, isSettings=false, isSmallSettings=false, isRunBuild=false, onRunClick}) {
  return (
    <header className="ya-header">
      <span className={className}>
        <span>{text}</span>
        <span className="wrap">
        {isRunBuild ? <Button text="Run build" className="ya-button build medium-size" onClick={onRunClick}/> : null}
        {isSettings ? <Button text="Settings" className="ya-button settings medium-size" href="/settings"/> : null}
        {isSmallSettings ? <Button text="" className="ya-button settings small medium-size" href="/settings"/> : null}        
        </span>
      </span>
    </header>
  );
}

export default Header;
