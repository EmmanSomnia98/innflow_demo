import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

const baseUrl = import.meta.env.VITE_VERCEL_URL || import.meta.env.VITE_RENDER_URL;

fetch(`${baseUrl}/api/endpoint`)
  .then((response) => response.json())
  .then((data) => console.log(data));

createRoot(document.getElementById("root")!).render(<App />);
