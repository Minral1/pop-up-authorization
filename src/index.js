import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App'
import './styles/App.css'

const container = document.getElementById("root");
const popup = createRoot(container)

popup.render(<App />)