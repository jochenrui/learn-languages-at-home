import axios from "axios";
import { jest } from "@jest/globals";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("should fetch users", () => {
  const response = {};
  const resp = { data: response };
  mockedAxios.create.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

  return deepLClient.then((data: any) => expect(data).toEqual(response));
});
