import type { NextPage } from "next";
import { Text } from "@sudonick/server/src/utils/graphqlTypes";
import Link from "next/link";

type TextProps = {
  text: Text[];
};

const TextBlock: NextPage<TextProps> = ({ text }) => {
  return (
    <>
      {text?.map((text, index) => {
        return (
          <span
            key={index}
            className={`
            ${text.annotations?.strikethrough ? "line-through" : ""}
            ${text.annotations?.bold ? "font-semibold" : ""}
            ${
              text.annotations?.color
                ? `text-[${text.annotations?.color.toLowerCase()}]`
                : ""
            }
            ${text.annotations?.italic ? "italic" : ""}
            ${text.annotations?.underline ? "underline underline-offset-2" : ""}
            `}
          >
            {text.link ? (
              <Link href={text.link}>
                <a className={`text-pink-0 underline underline-offset-2`}>
                  {text.content}
                </a>
              </Link>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export default TextBlock;
