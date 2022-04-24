import './UserProfile.css';
import Address from './Address';
import PhoneNumber from './PhoneNumber';
import Company from './Company'
const UserProfile = ({ userData }) => {
    return(
        // <div className='card-section'>
            <div className="card">
                <div className="card-title">{userData.name}</div>
                <div className="card-body">
                <p>Username: {userData.username}</p>
                <p>email: {userData.email}</p>
                <Address address={userData.address}/>
                <p>Website: {userData.website}</p>
                <PhoneNumber type="Phone-number" number={userData.phone}></PhoneNumber>
                <Company company={userData.company}/>
                </div>
            </div>
        // </div>
    );

};

export default UserProfile;