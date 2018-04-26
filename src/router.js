/**
 * Created by xiaodeng on 2018/3/27.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
const AsyncHome = Loadable({
    loader: () => import('./containers/App'),
    loading: ()=>{ return (<div>loading</div>)}
});
const AsynCcoupon = Loadable({
    loader: () => import('./screen/pages/activity/coupon'),
    loading: ()=>{ return (<div>loading</div>)}
});
const AsynMianshi = Loadable({
    loader: () => import('./screen/pages/activity/mianshi'),
    loading: ()=>{ return (<div>loading</div>)}
});
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    //console.log('allowTransition',allowTransition);
    callback(allowTransition)
}

export const routes = [
    {
        path: '/',
        exact: true,
        component: AsyncHome
    },
    {
        path: '/coupon',
        component: AsynCcoupon
    },
    {
        path: '/mianshi',
        component: AsynMianshi
    }
]

export default class AppRouter extends React.Component{
    render() {
        return (
            <Router getUserConfirmation={getConfirmation}>
                {renderRoutes(routes)}
            </Router>
        )
    }
}
