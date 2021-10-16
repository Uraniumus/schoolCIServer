import '../common.css';
import './Start.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';


function Start() {
  return (
    <div className="Start">
      <Header className="main" text="School CI server" isSettings="true"/>
      
      <div className="content">
          <div className="wrap">
              <i className="tools"></i>
              <span className="text">Configure repository connection and synchronization settings</span>
              <Button text="Open settings" className="ya-button active big-size" href="/settings"/>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Start;
