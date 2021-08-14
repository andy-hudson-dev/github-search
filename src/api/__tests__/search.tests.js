import search from "../search";

const defaultFetch = global.fetch;

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
        const mockQuery = "test";

        await search(mockQuery);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/search/users?q=${mockQuery}`,
            ),
        ));
    })
})