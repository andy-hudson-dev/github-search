import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import getUser from "../../api/getUser";

const Result = ({ id }) =>  {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const data = await getUser(id);
        
                setUserData(data);
            }
            catch (e) {
                setError(e.message);
            }
        }

        getData();
    }, [id]); 
    
    if(error) {
        return <p>{error}</p>
    }
    if (!userData) {
        return null;
    }

    const renderDetails = () => {

        const { company, bio } = userData;
        return(
            <div className="result__main--details">
                {company && company !=="null" ? <span>{company}</span> : null}
                {bio && bio !=="null" ? <span>{bio}</span> : null}
            </div>
        );
    }

    const { avatar_url, login, html_url, name } = userData;

    return (    
        <li>
            <div className="result">
                <div className="result__avatar">
                    <img src={avatar_url} alt={`${name} avatar`} />
                </div>
                <div className="result__main">
                    <div className="result__main--header">
                        <a href={html_url}>{login}</a>
                        <p>{name}</p>
                    </div>
                    {renderDetails()}
                </div>                
            </div>
        </li>
    )
}

Result.propTypes = {
    id: PropTypes.number.isRequired,
}

export default Result
