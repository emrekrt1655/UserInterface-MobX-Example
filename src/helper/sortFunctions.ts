// it is needed to compare the strings
// we need it in our sorted function

const compareAsc = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
const compareDesc = (a: string, b: string) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
};

export { compareAsc, compareDesc };
