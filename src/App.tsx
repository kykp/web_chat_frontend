import React from 'react';
import {PageIndex} from "./pages/index";
import { useAppSelector } from './utils/redux';
import {getCurrentTitle} from "./store/chat/reselect"

import "./index.css"

function App() {
  const title = useAppSelector(getCurrentTitle);
  return (
      <PageIndex title={title}/>
  );
}

export default App;
