import type { NextPage } from "next";
import { Text } from "@sudonick/server/src/graphqlTypes";

type TextProps = {
  text: Text[];
};

const colorMap: { [key: string]: string } = {
  default: "text-[#FFFFFFE6]",
  gray: "text-[#979A9BF2]",
  brown: "text-[#937264]",
  orange: "text-[#FFA344]",
  yellow: "text-[#FFDC49]",
  green: "text-[#4DAB9A]",
  blue: "text-[#529CCA]",
  purple: "text-[#9A6DD7]",
  pink: "text-[#E255A1]",
  red: "text-[#FF7369]",
  "default-bg": "bg-transparent",
  gray_background: "bg-[#454B4E]",
  brown_background: "bg-[#434040]",
  orange_background: "bg-[#594A3A]",
  yellow_background: "bg-[#59563B]",
  green_background: "bg-[#354C4B]",
  blue_background: "bg-[#364954]",
  purple_background: "bg-[#443F57]",
  pink_background: "bg-[#533B4C]",
  red_background: "bg-[#594141]",
};

const textHandler = (text: string) => {
  let space = "";
  space = "\u2008"; // punctuation space
  // space choices
  // space = "\u2002"; // en space - bit bigger than punctuation space
  // space = "\u2003"; // en space - a lot bigger than punctuation space
  // space = "\u0020"; // normal space
  // space = "\u00a0"; // nbsp 

  return text.replace(/\s/g, space);
};

const TextBlock: NextPage<TextProps> = ({ text }) => {
  return (
    <>
      {text?.map((text, index) => {
        return (
          <span
            key={index}
            className={`${
              text.annotations?.strikethrough ? "line-through" : ""
            } ${text.annotations?.bold ? "font-semibold" : ""} ${
              colorMap[text.annotations?.color.toLowerCase()!]
            } ${text.annotations?.italic ? "italic" : ""} ${
              text.annotations?.underline ? "underline underline-offset-2" : ""
            }
            ${text.annotations?.code? "font-mono bg-[#353C45] text-base leading-tight": ""}
            `}
          >
            {
              text.link ? (
                <a href={text.link} target="_blank" className={``}>
                  {text.content}
                </a>
              ) : (
                textHandler(text.content)
              )
            }
          </span>
        );
      })}
    </>
  );
};

export default TextBlock;
