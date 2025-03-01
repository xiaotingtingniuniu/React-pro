import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from './router';
//导入定制主题颜色文件
import './theme.css'
const total = sum(1,3);
console.log('total',total);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

