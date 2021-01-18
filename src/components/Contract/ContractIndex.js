import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";

class ContractIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/contract/index")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>Contract</h1>
                    <table className="table">
                        {items.map(item => (
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <td>{item.id}</td>
                                    <td><Link to={"/contract/" + item.id}>Show</Link></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            );
        }
    }
}

ContractIndex.propTypes = {};

export default ContractIndex;