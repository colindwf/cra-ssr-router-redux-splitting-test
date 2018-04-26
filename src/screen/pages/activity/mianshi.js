import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import '../../../css/mianshi.css'

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('document.referrer_mianshi:',document.referrer);
        document.title = '标题mianshi'
    }
    render () {
        const {dispatch,visibleTodos,visibilityFilter} =this.props;
        return (
            <div className="pagewrap">
                    <p><Link to="/">goto index</Link></p>
                    <p><Link to="/coupon">goto coupon</Link></p>
                    <div className="topest">

                    </div>
                    <div className="landing-banner"></div>
                    <div className="join-us">
                            <div className="join-us-title"></div>
                    </div>

            </div>
        );
    }
}
export default connect()(App);