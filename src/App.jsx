import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './index.css';
import InputField from './form/InputField';
import Checkbox from './form/Checkbox';
import RadioButton from './form/RadioButton';
import Select from './form/Select';
import ClassComponent from './basic-component/ClassComponent';
import FunctionalComponent from './basic-component/ClassComponent';
import UseRef from './hooks/UseRefs';
import Modal from './basic-component/Modal';
import Tab from './basic-component/Tab';
import Slider from './basic-component/Slider';
import Accordion from './basic-component/Accordion';
import UseReducer from './hooks/UseReducer';
import UseContext from './hooks/UseContext';
import UseCallback from './hooks/UseCallback';
import UseMemo from './hooks/UseMemo';
import ToggleSwitch from './hooks/ToggleSwitch';
import ProgressBar from './basic-component/ProgressBar';
// import CustomHookFetchData from './hooks/CustomHooFetchData';
// import FetchDataAPI from './basic-component/FetchDataAPI';
import IBMFormLayout from './form/IBMFormLayout';

const accordionItems = [
  { title: "Item 1", content: "Content for Item 1" },
  { title: "Item 2", content: "Content for Item 2" },
  { title: "Item 3", content: "Content for Item 3" },
];

const tabs = [
  { id: 1, content: "Content for Tab 1" },
  { id: 2, content: "Content for Tab 2" },
  { id: 3, content: "Content for Tab 3" },
];

const slidePages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];


function App() {
  return (
    <>
      <h1>App</h1>
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <InputField/> */}
      {/* <RadioButton/> */}
      {/* <Select/> */}
      <Checkbox/>
      {/* <IBMFormLayout/> */}
      {/* <ProgressBar/> */}
      {/* <Modal/> */}
      {/* <Tab tabs={tabs}/> */}
      {/* <Slider slidePages={slidePages}/> */}
      {/* <Accordion items={accordionItems}/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <UseCallback/> */}
      {/* <UseMemo/>   */}
      {/* <ToggleSwitch/> */}
      {/* <FetchDataAPI/> */}
      {/* <CustomHookFetchData/> */}

    </>
  )
}

export default App
