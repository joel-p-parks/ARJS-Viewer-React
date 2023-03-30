import React from "react";
import "./App.css";
import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";

function App() {
  return (
    <div id="viewer-host">
      <Viewer report={{ Uri: 'TestReport.rdlx-json' }} />
    </div>
  );
}

export default App;