import './Footer.css';
import Link from './Link';

function Footer({className}) {
  return (
    <footer className="ya-footer">
        <span className={className}>
            <span className="ya-link-block">
                <Link text="Support" className="ya-link"/>
                <Link text="Learning" className="ya-link"/>
                <Link text="Русская версия" className="ya-link"/>
            </span>
            <span className="ya-copyright">&copy; 2021 Bykova Svetlana</span>
      </span>
    </footer>
  );
}

export default Footer;
