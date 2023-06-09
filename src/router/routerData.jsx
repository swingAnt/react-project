import React from "react";
import { Route } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage/index.tsx";
import ListView from "@/pages/ListView";
import Form from "@/components/Form";

import Home from "@/containers/index";

const routerData= [
    {
        id: "/",
        path: "/",
        element: <ListView />,
        desc: '列表',
        authority: "",
    },
  
{
    id: "/home/manage/form",
    path: "/home/manage/form",
    element: <Form />,
    desc: '表单',
    authority: "",
},
{
    id: "*",
    path: "*",
    element: <ErrorPage />,
    desc: 3,
    authority: "",
},];
export const routes = () => {
    return  <Route exact path='/' element={<Home />} children={
        routerData.map(({ id, path, exact, element, authority }) => {
            return (
                <Route
                    path={path}
                    id={id}
                    element={element}
                />
            );
        })
    }>    
    </Route>
};
