export const slugify = (str: string) => {
    try {
      if (str.endsWith("?")) {
        str = str.slice(0, -1);
        return str.split(" ").join("-").toLowerCase();
      }
      return str.split(" ").join("-").toLowerCase();
    } catch (err) {
      console.log("slugify error", err);
      return "";
    }
  };
  