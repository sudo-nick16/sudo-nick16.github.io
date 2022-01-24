import type { NextPage } from "next";
import { ParsedBlock } from "@sudonick/server/src/graphqlTypes";
import TextBlock from "./TextBlock";

type BlockProps = {
  block: ParsedBlock;
};

// declaring enum within comp as nextjs' default loader fails to load enums declared outside its root.
enum Element {
  p = "p",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  ul = "ul",
  ol = "ol",
  input = "input",
  img = "img",
  li = "li",
  blockquote = "blockquote",
}

const styleMap: { [key in Element]: string } = {
  p: "text-base font-regular",
  h1: "text-2xl font-bold",
  h2: "text-xl font-semibold",
  h3: "text-lg font-medium",
  ul: "ml-1 marker:mr-0 ",
  ol: "ml-1 marker:mr-0 ",
  li: "ml-1 marker:mr-0 ",
  input: "",
  img: "",
  blockquote: "",
};

let index = 0;

const Block: NextPage<BlockProps> = ({ block }) => {
  let Component = block.element;
  if (block.element === "input") {
    return (
      <div
        className={`flex text-white items-center py-1 ${
          block.checked ? "line-through opacity-70" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={block.checked ? true : false}
          className={`mr-2`}
          readOnly
        />
        <TextBlock text={block.text!} />
      </div>
    );
  }
  if (block.element === "img") {
    return (
      <img
        src={block.img?.url}
        className={`max-w-[100%] max-h-96 w-auto object-cover mx-auto rounded-lg`}
      />
    );
  }

  if (block.element === "ol") {
    index += 1 / 2;
    return (
      <div className={`text-white py-1 ${styleMap[block.element]}`}>
        {index}.&nbsp;
        <TextBlock text={block.text!} />
      </div>
    );
  } else if (block.element === "ul") {
    index = 0;
    return (
      <div className={`text-white py-1 ${styleMap[block.element]}`}>
        &#8226;&nbsp;&nbsp;
        <TextBlock text={block.text!} />
      </div>
    );
  }

  return (
    <Component
      className={`text-white py-1 ${block.text!.length === 0 ? "mt-2" : ""} ${
        styleMap[block.element]
      }`}
    >
      {Component === "blockquote" ? (
        <span className={`bg-white mr-2`}>|</span>
      ) : null}
      <TextBlock text={block.text!} />
    </Component>
  );
};

export default Block;
