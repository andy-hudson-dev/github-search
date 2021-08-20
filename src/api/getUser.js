async function getUser(id) {

    if (!id || id === "") {
        throw new Error("Please provide a user id.");
    }

    const response = await fetch(
        `https://api.github.com/user/${id}`,
    );

    if (response.status === 403) {
        throw new Error(
            "Request limit reached, please try later.",
        );
    }

    const data = await response.json();

    return data;
}

export default getUser;