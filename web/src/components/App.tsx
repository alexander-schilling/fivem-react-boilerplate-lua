import React from "react";
import "./App.css";
import { debugData } from "@/utils/debugData";
import IndexView from "@/views/Index/IndexView";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return <IndexView />;
};

export default App;
