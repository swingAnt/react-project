import React from "react";
import { Route } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage/index.tsx";
import ListView from "@/pages/ListView";
import Form from "@/components/Form";
import Tour from "@/components/Tour";
import LayoutFree from "@/components/LayoutFree";

import Home from "@/containers/index";

const routerData= [
    {
        id: "/",
        path: "/",
        element: <LayoutFree />,
        desc: '自由布局',
        authority: "",
    },
    {
        id: "/home",
        path: "/home",
        element: <LayoutFree />,
        desc: '列表',
        authority: "",
    },
    {
        id: "/home/manage/table",
        path: "/home/manage/table",
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
},{
    id: "/home/manage/tour",
    path: "/home/manage/tour",
    element: <Tour />,
    desc: '向导',
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
