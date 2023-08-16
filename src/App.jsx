import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import InputField from './form/InputField';
import Checkbox from './form/Checkbox';
import RadioButton from './form/RadioButton';
import Select from './form/Select';
import ClComponent from './ClassComponent';
import FuncComponent from './ClassComponent';
import UseRef from './hooks/UseRefs';
import Modal from './Modal';
import Tab from './Tab';
import Slider from './Slider';
import Accordion from './Accordion';

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
      <p>
        <h1>App</h1>
      </p>
      {/* <InputField/> */}
      {/* <Checkbox/> */}
       {/* <RadioButton/> */}
      {/* <Select/> */}
      {/* <ClComponent/> */}
      {/* <FuncComponent/> */}
      {/* <UseRef/> */}
      {/* <Modal/> */}
      {/* <Tab tabs={tabs}/> */}
      {/* <Slider slidePages={slidePages}/> */}
      <Accordion items={accordionItems}/>
    </>
  )
}

export default App
