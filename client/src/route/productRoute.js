import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import productCompo from '../component/ProductComponent/productCompo';

let router=createBrowserRouter(
  [
      {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {
              path:'about',
              Component:About
            },
            {
              path:'home',
              Component:Home
            },
            {
              path:'/products',
              Component:productCompo
            }

        ]
      }
  ])



export default router;