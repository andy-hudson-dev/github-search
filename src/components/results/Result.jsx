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

    const { avatar_url, login, html_url, name, followers, company, bio } = userData;
    return (    
        <li>
            <div>
                <img src={avatar_url} alt={name} />
                <a href={html_url}>{login}</a>
                <p>{name}</p>
                <p>{`${company} ${bio}`}</p>
                <p>{`${followers} Followers`}</p>
            </div>
        </li>
    )
}

Result.propTypes = {
    id: PropTypes.number.isRequired,
}

export default Result
