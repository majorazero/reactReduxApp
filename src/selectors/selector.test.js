import expect from "expect";
import {authorsFormattedForDropdown} from "./selectors";

describe("Author Selectors", () => {
  describe("authorsFormattedForDropdown", () => {
    it("should return author data formatted for use in a dropdown", () => {
      const authors = [
        {id: "cory-house", firstName: "Cory", lastName: "House"},
        {id: "dan-hsu", firstName: "Dan", lastName: "Hsu"}
      ];
      const expected = [
        {value: "cory-house", text: "Cory House"},
        {value: "dan-hsu", text: "Dan Hsu"}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
