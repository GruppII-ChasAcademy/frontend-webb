import { RouterProvider } from "react-router-dom";
import router from "./routes";   // eller "./routes/index"

export default function App() {
  return <RouterProvider router={router} />;
}