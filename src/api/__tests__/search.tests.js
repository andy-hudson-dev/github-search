import search from "../search";

const defaultFetch = global.fetch;

const MOCK_QUERY= "test";

beforeEach(() => {
    global.fetch = jest.fn();

    global.fetch.mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({ totalRecords: 99 }),
        }),
    );
});

afterEach(() => {
    global.fetch = defaultFetch;
});

describe("search", () => {
    it("should search for users by default", async () => {
        await search(MOCK_QUERY);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/users`,
            ),
        ));
    });

    it("should call api with passed in query", async () => {
        await search(MOCK_QUERY);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/users?q=${MOCK_QUERY}`,
            ),
        ));
    });

    it("should request 10 records per page by default", async() => {
        await search(MOCK_QUERY);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/users?q=${MOCK_QUERY}&per_page=10`,
            ),
        ));
    });

    it("should request page 1 by default", async() => {
        await search(MOCK_QUERY);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/users?q=${MOCK_QUERY}&per_page=10&page=1`,
            ),
        ));
    });
    
    it("should query api with passed in pagination and type parameters", async() => {
        await search(MOCK_QUERY, { type: "random", recordsPerPage: 100, page: 4 });

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/random?q=${MOCK_QUERY}&per_page=100&page=4`,
            ),
        ));
    });

    it("should throw if no query is passed", async () => {
        try {
            await search();
        } catch (error) {
            expect(error.message).toBe("Please provide a search term.");
        }
    });

    it("should throw if request limit is reached", async () => {
        global.fetch.mockImplementation(() =>
            Promise.resolve({
                status: 403,
            }),
        );

        try {
            await search(MOCK_QUERY);
        } catch (error) {

            expect(error.message).toBe(
                "Request limit reached, please try later.",
            );
        }
    });

    it("should throw if api returns unsuccessful", async () => {
        global.fetch.mockImplementation(() =>
            Promise.resolve({
                status: 500,
            }),
        );

        try {
            await search(MOCK_QUERY);
        } catch (error) {
            /* eslint-disable-next-line jest/no-conditional-expect */
            expect(error.message).toBe(
                "An unknown error has occurred",
            );
        }
    })
})