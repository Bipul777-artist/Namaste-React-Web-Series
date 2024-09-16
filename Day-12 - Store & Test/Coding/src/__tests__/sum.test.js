import {sum} from "../components/sum";

test("To test first sum function", () => {

    const result = sum(3, 4);

    expect(result).toBe(7);
});