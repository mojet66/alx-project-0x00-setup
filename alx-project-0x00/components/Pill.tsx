import { PillProps } from "@/Interfaces";
const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#F9F9F9] px-3 rounded-full w-auto h-[27px]">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;
