import Button from "@/components/Button";
import Card from "@/components/Card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="font-extralight text-xl">Landing Page</h1>
      <Card />
      <div className="flex gap-4">
        <Button title="Buy Now" styles="rounded-sm text-sm bg-red-300" />
        <Button
          title="Connect with us"
          styles="rounded-lg text-2xl bg-yellow-500"
        />
        <Button title="Buy" styles="rounded-full text-lg bg-green-400" />
      </div>
    </div>
  );
};
export default Landing;
