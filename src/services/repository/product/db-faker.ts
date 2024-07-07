import dbFake from "../../../../db.json";

export const getData = () => {
  return dbFake;
};

export const getDataByID = (id: number) => {
  const copy = [...dbFake];
  const p = copy.find((x) => x.id == id);
  return p;
};
