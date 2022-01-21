export const getDate = (date: string): string => {
  let d = new Date(date).toDateString();
  let d2 = d.split(" ");
  return  d2[1] + " " + d2[2] + ", " + d2[3];
};
