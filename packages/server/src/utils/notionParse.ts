import { Annotations, Element, ParsedBlock, Text } from '../graphqlTypes';

const blockMap: { [key: string]: Element } = {
  paragraph: Element["p"],
  heading_1: Element["h1"],
  heading_2: Element["h2"],
  heading_3: Element["h3"],
  bulleted_list_item: Element["ul"],
  numbered_list_item: Element["ol"],
  to_do: Element["input"],
  image: Element["img"],
  quote: Element["blockquote"],
};

export const notionParse = (blocks: any): ParsedBlock[] => {
  const parsedBlocks: ParsedBlock[] = blocks.map((block: any) => {
    const data: ParsedBlock = {
      id: block.id,
      element: blockMap[block.type],
    };
    if (block.type === "image") {
      data.img = {
        url: block.image[block.image.type].url,
      };
    }
    if (block.type === "to_do") {
      data.checked = block["to_do"].checked;
    }
    if (block.type !== "image") {
      const parsedText: Text[]= block[block.type].text.map((text: any) => {
        let content: string = text.plain_text;
        let link: string = text.href;
        let annotations: Annotations = text.annotations;
        const textObj = {
          content,
          link,
          annotations,
        };
        return textObj;
      });
      data.text = parsedText;
    }
    return data;
  });
  return parsedBlocks;
};
