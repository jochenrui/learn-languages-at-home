import axios from "axios";
import deepLClient from "./axios";

jest.mock("axios");

test("should fetch users", () => {
  const response = {};
  const resp = { data: response };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return deepLClient.then((data: any) => expect(data).toEqual(response));
});
