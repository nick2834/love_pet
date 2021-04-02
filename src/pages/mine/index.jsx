import React, { Component } from 'react';
import Navbar from '@/components/navbar';

import "./index.scss"

export class Mine extends Component {
    render() {
        return (
            <div className="pages">
                <Navbar title="我的" isBack={false} isShow={true} />
            </div>
        )
    }
}

export default Mine
