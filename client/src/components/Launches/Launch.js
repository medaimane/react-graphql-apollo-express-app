import React, {Fragment} from 'react'

export default function Launch({launch}) {
    const {
        // flight_number,
        mission_name,
        launch_year,
        // launch_date_local,
        // launch_success
    } = launch;
    return (
        <Fragment>
            <div className="card">
                <div className="card-content">
                    <p className="title">
                    “{mission_name}.”
                    </p>
                    <div className="subtitle">
                    <p>{launch_year}</p>
                    <a href="!#">@bulmaio</a>. <a href="!#">#css</a> <a href="!#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                    <span>
                        View on <a href="!#">Twitter</a>
                    </span>
                    </p>
                    <p className="card-footer-item">
                    <span>
                        Share on <a href="!#">Facebook</a>
                    </span>
                    </p>
                </footer>
            </div>
        </Fragment>
    )
}
