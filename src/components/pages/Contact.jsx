import React, { Component } from 'react';

// Components
import PageLink from '../PageLink';

// --------------
// Default Export
// --------------

export default class Contact extends Component {
    render() {
        return (
            <section className="Page__Contact">
                <h1>Have an idea for a project?</h1>
                <p>And some further elaboration goes in here.</p>
                <PageLink message="Send email" title email/>
            </section>
        );
    }
}