import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// -------------------------------------------------------------------------------

import "./index.css";
import { Router } from "@/routes";
import Layout from "@/components/Layout/MineLayout";
import { ContextProvoder } from "@/utils/context/myContext";
import { ContextProvoderTwo } from "@/utils/context/myContextTwo";

// -------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ContextProvoderTwo>
      <ContextProvoder>
        <Layout>
          <Router />
        </Layout>
      </ContextProvoder>
    </ContextProvoderTwo>
  </BrowserRouter>
);
