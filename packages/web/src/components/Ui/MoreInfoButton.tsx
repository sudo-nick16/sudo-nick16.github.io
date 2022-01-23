import type { NextPage } from "next";

type MoreInfoButtonProps = {
  className?: string;
  text: string;
  onClick?: () => void;
};

const MoreInfoButton: NextPage<MoreInfoButtonProps> = ({
  className,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#81E6D9] font-semibold p-[0.4rem] px-4 w-fit rounded-md text-[#1A202C] focus-within:ring-2 flex items-center hover:bg-[#4FD1C5] focus-within:bg-[#4FD1C5] ${className}`}
    >
      {text}
      <div
        className={`rotate-45 border-[#1A202C] h-2 w-2 border-2 border-l-0 border-b-0 ml-2 animate-swing`}
      ></div>
    </button>
  );
};

export default MoreInfoButton;
