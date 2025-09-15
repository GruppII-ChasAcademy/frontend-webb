import { RouterProvider } from "react-router-dom";
import router from "./routes"; // index.tsx i routes-mappen

export default function App() {
  return <RouterProvider router={router} />;
}
