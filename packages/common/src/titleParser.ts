export const titleParser = (
    name: string
): { title: string; description: string, img: string } => {
    try {
        const [title, description, img] = name.split(";;");
        return {
            title,
            description,
            img
        };
    } catch (err) {
        throw new Error("TitleParser Error");
    }
};
