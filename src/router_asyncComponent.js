/**
 * Created by xiaodeng on 2018/3/27.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import asyncComponent from './AsyncComponent';
const AsyncHome = asyncComponent(() => import('./containers/App'))
const AsynCcoupon = asyncComponent(() => import('./screen/pages/activity/coupon'))
const AsynMianshi = asyncComponent(() => import('./screen/pages/activity/mianshi'))


export default class AppRouter extends React.Component{
    render() {
        return (
            <Router basename="/build">
                <div>
                    <Route exact path="/" component={AsyncHome}/>
                    <Route  path="/coupon" component={AsynCcoupon}/>
                    <Route  path="/mianshi" component={AsynMianshi}/>
                </div>
            </Router>
        )
    }
}
