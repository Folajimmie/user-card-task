import './Address.css';
const Address = ({ address }) => {
    return(
        <div className="address">
            <p>street: {address.street}, {address.suite} </p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
        </div>
    );
};

export default Address;