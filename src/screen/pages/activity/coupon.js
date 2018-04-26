import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import '../../../css/coupon.css'
//页面 url /#/coupon
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            mobile:'',
            scan_id:'',
            src:''
        }
    }
    componentDidMount(){
        const {dispatch} =this.props;
        console.log('document.referrer_coupon:',document.referrer);
        document.title = '标题coupon'
    }
    render () {
        const {dispatch} =this.props;
        console.log('document.referrer_coupon:',this.props)
        return (
            <div className="pagewrap">
                    <p><Link to="/">goto index</Link></p>
                    <p><Link to="/mianshi">goto mianshi</Link></p>
                    <div className="topest">
                            <p className="slogan">做家政我们更专业!</p>
                    </div>
                    <div className="landing-banner"
                         onTouchStart={(e)=>{
                             e.preventDefault && e.preventDefault();
                         }}
                         onTouchMove={(e)=>{
                        e.preventDefault && e.preventDefault();
                        e.stopPropagation && e.stopPropagation();
                        console.log('onTouchMove',e.touches[0]);
                    }}></div>



                    <div className="input-hover-pop">
                        <div className="input-hover-con">
                            <form onSubmit={this.handleSubmit}>
                                <div className="telphone">
                                    <span className="tel-ico"></span>
                                    <input name="tel" type="num" placeholder="请输入手机号码" 
                                    ref="tel" 
                                    value={this.state.value}
                                    onChange={(e) => {this.setState({mobile:e.target.value})}}
                                    onBlur={(e)=>{

                                    }}
                                    />
                                </div>
                                <button type="button" className="coupon-button" >点击领取<span className="coupon-money">10元优惠券</span></button>
                            </form>
                            
                        </div>
                    </div>
            </div>
        );
    }
}
export default connect((state)=>state)(App);