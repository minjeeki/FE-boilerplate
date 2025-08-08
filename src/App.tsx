import {QueryProvider} from "@/providers/QueryProvider";
import {RouterProvider} from "react-router";
import {router} from "@/lib/router";

import "./App.css";

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default App;
