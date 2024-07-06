import dbFake from "../../../db.json";

export const getData = () => {
  return dbFake.products;
};

export const getDataByID = (id: number) => {
  const copy = [...dbFake.products];
  const p = copy.find((x) => x.id == id);
  return p;
};
