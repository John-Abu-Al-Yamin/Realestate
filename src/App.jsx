import { RouterProvider } from "react-router-dom";
import router from "./router";
import TanstackProvider from "./providers/TanstackProvider";

function App() {
  return (
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  );
}

export default App;
