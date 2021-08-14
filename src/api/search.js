async function search(
    query,
    { type = "users", recordsPerPage = 10, page = 1 } = {},
) {

    const response = await fetch(
        `https://api.github.com/search/${type}?q=${query}&per_page=${recordsPerPage}&page=${page}`,
    );
    
    const data = await response.json();

    return data;
}

export default search;