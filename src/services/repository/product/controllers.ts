import { getData, getDataByID } from "./db-faker";

export const ControllerProduct = {
  getFaker: () => {
    return getData();
  },
  getByIdFaker: (id: number) => {
    return getDataByID(id);
  },
};
