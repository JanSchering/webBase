import React from "react";
import { dataService } from "../../../Routing/utilities/data.service";
import { userService } from "../../../Routing/utilities/user.service";

const mockSuccessResponse = [{ bearbeiter: "test" }];

export const mock = () => {
  jest
    .spyOn(dataService, "requestGET")
    .mockImplementation(() => Promise.resolve(mockSuccessResponse));
};

export const clearMock = () => {
  dataService.requestGET.mockClear();
};

export const mockLogin = () => {
  jest.mock("../Routing/utilities/user.service", () => {
    function login(props) {
      Promise.resolve(mockSuccessResponse);
    }
  });
};

export const clearLoginMock = () => {};

/*export const mockUseEffect = () => {
  jest
    .spyOn(React, "useEffect")
    .mockImplementation(() => console.log);
};*/
