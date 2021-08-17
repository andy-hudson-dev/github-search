import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getUser from '../../api/getUser';

const Result = ({ id }) =>  {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function getData() {
            const data = await getUser(id);
      
            setUserData(data);
          }

          getData();
    }, [id]);

    if (!userData) {
        return null;
    }

    const renderDetails = () => {

    const { company, bio } = userData;
        return(
            <div class="result__main--details">
                {company && company !="null" ? <span>{company}</span> : null}
                {bio && bio !="null" ? <span>{bio}</span> : null}
            </div>
        );
    }

    const { avatar_url, login, html_url, name } = userData;
    return (    
        <li>
            <div class="result">
                <div class="result__avatar">
                    <img src={avatar_url} alt={name} />
                </div>
                <div class="result__main">
                    <div class="result__main--header">
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
