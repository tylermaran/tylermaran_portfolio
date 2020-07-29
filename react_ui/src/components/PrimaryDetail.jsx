// Importing Dependencies
import React from 'react';

// Importing Styling
import './PrimaryDetail.css';

const PrimaryDetail = () => {
    return (
        <div className="primaryDetail">
            <h3 className="primaryName">Rysolv:</h3>
            <h4 className="primarySubtext">
                Rysolv is a crowdfunding platform designed to accelerate work on
                open source projects. Users sponsor outstanding issues or
                feature requests in open source projects. Developers earn
                bounties by resolving them.
            </h4>
            <ul>
                <li>Alpha launch in June 2020</li>
                <li>Continuing development for September 2020 Beta</li>
                <li>
                    Sign up to stay in the loop:{' '}
                    <a
                        className="styledLink"
                        target="0"
                        href="https://rysolv.com"
                    >
                        rysolv.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default PrimaryDetail;
