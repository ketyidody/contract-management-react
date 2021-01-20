import React, {Component} from 'react';
import Link from 'react-router-dom/Link'

// Had to name it RentalObjShow instead of RentalObjectShow
// as for some reason that name is reserved by the system
class RentalObjShow extends Component {
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
        fetch("http://localhost:8000/api/rental_object/show/"  + params.handle)
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
                    <h1>Rental object {item.name}</h1>
                    <p>
                        <Link to="/rental-object">Back to rental objects</Link>
                    </p>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{item.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{item.name}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{item.address}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{item.city}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{item.country}</td>
                        </tr>
                        <tr>
                            <th>Number of rooms</th>
                            <td>{item.number_of_rooms}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{item.description}</td>
                        </tr>
                        <tr>
                            <th>Contract</th>
                            <td>
                                {Object.entries(item.contract_ids).map(contract => (
                                    <Link to={"/contract/" + contract[0]}>{contract[1]}</Link>
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

RentalObjShow.propTypes = {};

export default RentalObjShow;
