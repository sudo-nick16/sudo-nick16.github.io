export const slugify = (str: string) => {
  // console.log(str.replace(/\/|\#| |\?/g, "-").toLowerCase());
  return str.replace(/\/|\#| |\?/g, "-").toLowerCase();
};
