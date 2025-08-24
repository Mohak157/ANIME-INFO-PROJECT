import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./store/store";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Form from "./components/Form"; 

createRoot(document.getElementById('root')).render(

      <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/ANIME-INFO-PROJECT/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
 
);
