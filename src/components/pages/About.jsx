import React, { Component } from 'react';

// Styles
import { FullWidth as Full } from '../Global';

// Components
import img from '../../img/text.png';

// --------------
// Default Export
// --------------

export default class About extends Component {
    render() {
        return (
            <main className="About">
                <h1>A descriptive title for my myself.</h1>
                <p>Then some further explaination can go here. And here if the text needs to wrap.</p>
                <Full>
                    <img src={ img } alt="img" />
                </Full>
            </main>
        );
    }
}