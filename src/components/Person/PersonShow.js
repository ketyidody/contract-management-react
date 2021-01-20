import React, {Component} from 'react';
import Link from 'react-router-dom/Link'

class PersonShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch("http://localhost:8000/api/person/show/"  + params.handle)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
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
                    <h1>Person {item.first_name} {item.last_name}</h1>
                    <p>
                        <Link to="/person">Back to persons</Link>
                    </p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{item.id}</td>
                            </tr>
                            <tr>
                                <th>FirstName</th>
                                <td>{item.first_name}</td>
                            </tr>
                            <tr>
                                <th>LastName</th>
                                <td>{item.last_name}</td>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <td>{item.p_type}</td>
                            </tr>
                            <tr>
                                <th>Contracts</th>
                                <td>
                                    {Object.entries(item.contract_ids).map((contract) => (
                                        <p>
                                            <Link to={"/contract/" + contract[0]} >{contract[1]}</Link>
                                        </p>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

PersonShow.propTypes = {};

export default PersonShow;
