async function search(
    query,
    { type = "users", recordsPerPage = 10, page = 1 } = {},
) {
    if (!query || query === "") {
        throw new Error("Please provide a search term.");
    }

    const response = await fetch(
        `https://api.github.com/search/${type}?q=${query}&per_page=${recordsPerPage}&page=${page}`,
    );

    if (!response.json) {
        throw new Error(
            "An unknown error has occurred",
        );
    }
    
    const data = await response.json();

    return data;
}

export default search;