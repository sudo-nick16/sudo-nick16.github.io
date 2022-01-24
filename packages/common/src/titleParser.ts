export const titleParser = (
  name: string
): { title: string; description: string } => {
  try{
    const [title, description] = name.split("~");
    return {
      title,
      description,
    };
  }catch(err){
    console.log("titleParser error", err);
    throw new Error("TitleParser Error");
  }
};
