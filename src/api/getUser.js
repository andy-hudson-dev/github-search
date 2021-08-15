async function getUser(id) {

    if (!id || id === "") {
        throw new Error("Please provide a user id.");
    }

    const response = await fetch(
        `https://api.github.com/user/${id}`,
    );
    
    const data = await response.json();

    return data;
}

export default getUser;