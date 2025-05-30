import { ButtonProps } from "@/interfaces";
function Button({ title, styles }: ButtonProps) {
  return (
    <div>
      <button className={`bg-blue-600 px-2 py-3 text-white ${styles}`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
