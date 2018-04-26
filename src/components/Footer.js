/**
 * Created by xiaodeng on 2018/3/13.
 */
import React from 'react';

export default class Footer extends React.Component {
    renderFilter(filter,name){
        if (filter === this.props.filter){
            return name
        }
        return (
            <a href="javascript:;" onClick={ (e) => {
                this.props.onFilterChange(filter);
            }}>
                {name}
            </a>
        );
    }
    render () {
        return (
            <div className="filter">
                <p>
                    展示 ：
                    {' '}
                    {this.renderFilter('SHOW_ALL','全部')}
                    {' | '}
                    {this.renderFilter('SHOW_COMPLETED','已完成')}
                    {' | '}
                    {this.renderFilter('SHOW_ACTIVE','未完成')}
                </p>
            </div>
        )
    }
}