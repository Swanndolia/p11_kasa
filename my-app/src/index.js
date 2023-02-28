import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router.js"
import "./assets/css/index.css"
import './assets/font/Montserrat.ttf';

export default function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);