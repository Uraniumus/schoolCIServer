import '../common.css';
import './Settings.css';
import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import InputField from '../components/InputField';

import useInput from "../utils/useInput";
import SettingsContext from '../context';


function Settings() {
   const [ , setIsSettingsApplied ] = useContext(SettingsContext);
   const gitRepo = useInput("");
   const buildCo = useInput("");
   const mainBr  = useInput("");
   const [isLoading, setIsLoading] = useState(false);
   const [inputMin, setInputMin] = useState('');   
   const [errorMsg, setErrorMsg] = useState('');  
   const [errorBtnMsg, setErrorBtnMsg] = useState('');  
   const [inputClass, setInputClass] = useState(''); 
   const history = useHistory();
   


   const changeMinHandler = event => {
    const regex = /^\d+$/;
     if (regex.test(event.target.value))
     setInputMin(event.target.value);
   };

  const blurHandler = event => {
    if (event.target.value.length === 0){
      setErrorBtnMsg("Oh you! it's required field");
      setInputClass("wrong-value");
    }
    else{
      if (errorBtnMsg.length !== 0)
      setErrorBtnMsg("That's better!");
      setInputClass("");
    }
  };
   
  
  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(gitRepo);
    if (gitRepo.value.length !== 0 && buildCo.value.length !== 0)
      setTimeout(() => {
        const success = Math.round(Math.random());
        // const success = true;
        if (success) {
          setIsSettingsApplied(true);
          setErrorMsg("");
          history.push('/');          
        } else {
          setIsSettingsApplied(false);
          setErrorMsg("Some problems on server, try later. Last update: " + Date.now());          
        };        
      }, 1000);
     else
     setErrorMsg("Some required fields are empty. Last update: " + Date.now());
     setIsLoading(false);
  }


  // render() {
  //      const { gitRepoError, buildCoError, mainBrError } = this.state;
  
  return (
    <div className="Settings">
      <Header className="main" text="School CI server"/>
      
      <div className="content">
          <div className="wrap">
              <div className="setting">
            <div className="settings__header">
                <span className="settings_header-title">Settings</span>
                <span className="settings_header-desc">Configure repository connection and synchronization settings.</span>
            </div>
            <div className="settings__inputs">
                <InputField label="GitHub repository" 
                            isReq="true" 
                            holder="user-name/repo-name"
                            error={errorBtnMsg} 
                            onBlur={blurHandler}
                            inputClass={inputClass}
                            {...gitRepo}/>
                <InputField label="Build command" 
                            isReq="true" 
                            holder="npm ci && npm run build"
                            error={errorBtnMsg} 
                            onBlur={blurHandler}
                            inputClass={inputClass}
                            {...buildCo}/>
                <InputField label="Main branch" 
                            holder="master"
                            {...mainBr}/>
                <div className="settings__inputs-sync">
                    <span>Synchronize every</span>
                    <input className="input-basic" type="text" name="name" placeholder="10" onChange={changeMinHandler} value={inputMin}/>
                    <span>minutes</span>
                </div>
            </div>
            {errorMsg ? <div className="error-msg">{errorMsg}</div> : ''}
            <div className="settings__buttons">
              <Button text="Save" className="ya-button active big-size" isLoading={isLoading} onClick={onSubmit}/>
              <Button text="Cancel" className="ya-button default big-size" href="/" isLoading={isLoading}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Settings;
