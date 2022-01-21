import type { NextPage } from "next";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  variant: string;
  text: string;
};

const Button: NextPage<ButtonProps> = ({
  onClick,
  className,
  variant,
  text,
}) => {
  console.log(text);
  return (
    <div
      onClick={onClick}
      className={`w-44 h-12 rounded-full text-white font-bold flex items-center justify-center bg-white relative ${className}`}
    >
      <div
        style={{ backgroundColor: variant }}
        className={`cursor-pointer absolute w-[calc(101%)] h-[calc(101%)] flex justify-center items-center rounded-full transition-all duration-300 bottom-1 hover:bottom-0`}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
