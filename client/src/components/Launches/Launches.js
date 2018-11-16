import React, { Component, Fragment } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag"
import Launch from './Launch';

const LaunchesQuery = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
  render() {
    return (
        <Fragment>
            <h1 className="title">
                Luanches :)
            </h1>
            
            <Query query={LaunchesQuery}>
                
                {({ loading, error, data }) => {
                    if (loading) return <h2 className="subtitle">Loading...</h2>;
                    if (error){ console.log(error); return <h2 className="subtitle">Error :(</h2>;}
        
                    // return data.launches.map(({
                    //     flight_number,
                    //     mission_name,
                    //     launch_year,
                    //     launch_date_local,
                    //     launch_success
                    // }) => (
                    //     <div key={flight_number}>
                    //         <div>
                    //         <p>{`${flight_number} - ${mission_name}: ${launch_date_local} (${launch_year}) | ${launch_success}`}</p>
                    //         </div>
                    //     </div>
                    // ));

                    return <Fragment>
                        {
                            data.launches.map(launch => (
                                <Launch key={launch.flight_number} launch={launch} />
                            ))
                        }
                    </Fragment>
                }}

            </Query>

        </Fragment>
    )
  }
}

export default Launches;