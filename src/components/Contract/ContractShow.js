import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ContractShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: [],
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch("http://localhost:8000/api/contract/show/" + params.handle)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div>
                    <div>
                        <h1>Contract {item.id}</h1>
                        <p>
                            <Link to="/contract">Back to contracts</Link>
                        </p>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{item.id}</td>
                            </tr>
                            <tr>
                                <th>Start date</th>
                                <td>{item.start_date}</td>
                            </tr>
                            <tr>
                                <th>End date</th>
                                <td>{item.end_date}</td>
                            </tr>
                            <tr>
                                <th>Notice period</th>
                                <td>{item.notice_period}</td>
                            </tr>
                            <tr>
                                <th>Rent</th>
                                <td>{item.rent}</td>
                            </tr>
                            <tr>
                                <th>Rental Object</th>
                                <td>
                                    {Object.entries(item.rental_object_id).map(rental_object => (
                                        <p>
                                            <Link
                                                to={"/rental-object/" + rental_object[0]}>{rental_object[1]}</Link>
                                        </p>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <th>Contrat Parties</th>
                                <td>
                                    {Object.entries(item.contract_party_ids).map(contract_party => (
                                        <p>
                                            <Link to={"/person/" + contract_party[0]}>{contract_party[1]}</Link>
                                        </p>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <th>Residents</th>
                                <td>
                                    {Object.entries(item.resident_ids).map(resident => (
                                        <p>
                                            <Link to={"/person/" + resident[0]}>{resident[1]}</Link>
                                        </p>
                                    ))}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

ContractShow.propTypes = {};

export default ContractShow;
