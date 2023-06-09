import React, { Suspense } from 'react';
import { Routes, } from "react-router-dom";
import { routes } from "./routerData";

function RouterManage(props) {

  const route = routes();
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {route}
      </Routes>
    </Suspense>


  );
}


export default RouterManage;