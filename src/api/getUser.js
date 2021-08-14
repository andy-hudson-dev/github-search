async function getUser(id) {

    const response = await fetch(
        `https://api.github.com/user/${id}`,
    );
    
    const data = await response.json();

    return data;
}

export default getUser;