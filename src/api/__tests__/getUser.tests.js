import getUser from "../getUser";

const defaultFetch = global.fetch;

beforeEach(() => {
    global.fetch = jest.fn();

    global.fetch.mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(),
        }),
    );
});

afterEach(() => {
    global.fetch = defaultFetch;
});

describe("getUser", () => {

    it("should throw if no id is passed", async () => {
        try {
            await getUser();
        } catch (error) {
            expect(error.message).toBe("Please provide a user id.");
        }
    });

    it("should throw if request limit is reached", async () => {
        global.fetch.mockImplementation(() =>
            Promise.resolve({
                status: 403,
            }),
        );

        try {
            await getUser(999);
        } catch (error) {
            expect(error.message).toBe(
                "Request limit reached, please try later.",
            );
        }
    });

    it("should request the specified user", async () => {
        await getUser(999);

        expect(expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining(
                `https://api.github.com/user/999`,
            ),
        ));
    });
});