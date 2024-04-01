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
import UseEffect from './hooks/UseEffect';
import ToggleSwitch from './hooks/ToggleSwitch';
import ProgressBar from './basic-component/ProgressBar';
// import CustomHookFetchData from './hooks/CustomHooFetchData';
// import FetchDataAPI from './basic-component/FetchDataAPI';
import IBMFormLayout from './form/IBMFormLayout';
<<<<<<< HEAD
import Video from './video';
import BasicGrid from './css-layout/basic-grid';
import NamingGridArea from './css-layout/naming-grid-area';
import NamingGridLines from './css-layout/naming-grid-lines';
import LocationHome from './basic-component/breadcrumb/location-based-breadcrumb/locationHome';
import LocationRoute from './basic-component/breadcrumb/location-based-breadcrumb/locationRoute';
import PathRoute from './basic-component/breadcrumb/path-based-breadcrumb/pathRoute';
import AttributeRoute from './basic-component/breadcrumb/attribute-based-breadcrumb/attribute-route';
=======
>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547

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
<<<<<<< HEAD
      {/* <h1>App</h1> */}
=======
      <h1>App</h1>
>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <InputField/> */}
      {/* <RadioButton/> */}
      {/* <Select/> */}
      {/* <Checkbox/> */}
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
<<<<<<< HEAD
      {/* <UseEffect/> */}
      {/* <ToggleSwitch/> */}
      {/* <FetchDataAPI/> */}
      {/* <CustomHookFetchData/> */}
      {/* <Video/> // It was not working propery here but worked on the atloud website project*/} 
      {/* <BasicGrid /> */}
      {/* <NamingGridLines/> */}
      {/* <NamingGridArea/> */}
      {/* <LocationRoute/> */}
      {/* <PathRoute/> */}
      <AttributeRoute/>
=======
      <UseEffect/>
      {/* <ToggleSwitch/> */}
      {/* <FetchDataAPI/> */}
      {/* <CustomHookFetchData/> */}

>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547
    </>
  )
}

export default App
