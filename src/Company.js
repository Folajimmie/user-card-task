import './Company.css';

const Company = ({ company }) => {
    return(
        <div className='company'>
            <p>Company-name: {company.name} </p>
            <p>Phrase: {company.catchPhrase}</p>
            <p> bs: {company.bs}</p>
        </div>
    )
};

export default Company;