import { createRoot } from "react-dom/client";
import App from "@/App";

const container = document.getElementById("root");
if (!container) throw new Error("Please provide a container for the app");
const root = createRoot(container);
root.render(<App />);
