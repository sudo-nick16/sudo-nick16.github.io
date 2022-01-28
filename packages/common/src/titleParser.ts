export const titleParser = (
  name: string
): { title: string; description: string } => {
  try {
    // console.log(name);
    const [title, description] = name.split("~");
    return {
      title,
      description,
    };
  } catch (err) {
    // console.log("titleParser error", err, name);
    throw new Error("TitleParser Error");
  }
};
