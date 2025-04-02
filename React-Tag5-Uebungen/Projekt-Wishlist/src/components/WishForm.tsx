import { useState } from "react";
import type { Wish } from "../App";

type WishFormProps = {
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>;
};

function WishForm({ setWishes }: WishFormProps) {
  const [wishInputValue, setWishInputValue] = useState("");
  const [prioritySelectValue, setPrioritySelectValue] = useState<
    "low" | "high"
  >("low");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newWish: Wish = {
      id: crypto.randomUUID(),
      title: wishInputValue,
      completed: false,
      priority: prioritySelectValue,
    };

    setWishes((oldWishes)=>([...oldWishes, newWish]))
  };

  return (
    <form>
      <input type="text" onChange={(e) => setWishInputValue(e.target.value)} />
      <select
        name=""
        id=""
        onChange={(e) => {
            if ()setPrioritySelectValue(e.target.value)}
        }
      >
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <div>
        <button disabled={wishInputValue.length.trim() === 0} className="bg-green-700"  p-2>
          Add wish
        </button>
      </div>
    </form>
  );
}

export default WishForm;
