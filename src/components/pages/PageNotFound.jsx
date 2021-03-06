import React from 'react';

// Components
import PageLink from '../PageLink';
import BackgroundAnimation from '../BackgroundAnimation';

// --------------
// Default Export
// --------------

export default function PageNotFound() {
    return (
        <section className="Page__404">
            <img src={ require('../../img/logo_large.svg') } alt="logo" width="150px"/>
            <h1>404. Page not found.</h1>
            <p>Yeah. Not sure how you ended up here, but try heading back to the home page and try again.</p>
            <div className="PageLink-padding">
                <PageLink page="/" message="Back to home page"/>
            </div>
            <BackgroundAnimation />
        </section>
    );
}