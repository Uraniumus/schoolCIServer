import '../common.css';
import './BuildHistory.css';
import React, { useState } from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import CommitCard from '../components/CommitCard';
import Button from '../components/Button';
import InputField from '../components/InputField';


function BuildHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onRunClick = event => {
    setIsModalOpen(true);
  }

  const onClose = event => {
    setIsModalOpen(false);
  }


  return (
    <>
    <div id="openModal" className={isModalOpen ? "modal open" : "modal"}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span className="modal-header">New build</span>
            <span className="modal-desc">Enter the commit hash which you want to build.</span>
            <InputField     holder="Commit hash"/>
            <span className="modal-btn">
                <Button text="Run build" className="ya-button active big-size" onClick={onClose}/>
                <Button text="Cancel" className="ya-button cancel big-size" onClick={onClose}/>
            </span>            
          </div>
        </div>
      </div>
    </div>

    <div className="BuildHistory">    
      <Header className="repo" text="philip1967/my-awesome-repo-with-long-long-long-repo-name" isSmallSettings="true" isRunBuild="true" onRunClick={onRunClick}/>
      
      <div className="content">
          <div className="wrap">
              <CommitCard/>
              <CommitCard/>
              <CommitCard/>
              <span className="flex">
                  <Button text="Show more" className="ya-button default medium-size"/>
              </span>
          </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default BuildHistory;
