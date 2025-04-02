import { useState } from "react";
import WishForm from "./components/WishForm";

type Wish = {
  id: string;
  title: string;
  priority: "high" | "low";
  completed: boolean;
};

// dieser Schritt umgeht das Problem, wenn TS als type "never" angibt, ist ähnlich
// const initialWishes: Wish[] = []

function App() {
  // <Wish[]> umgeht auch den typ never, das ist so ähnlich wie bei document.querySelector<HTML...>
  const [wishes, setWishes] = useState<Wish[]>([]);

  const deleteWish = (deleteId: string) => {
    //// filter schaut hier für jeden wunsch, ob er der zu löschenden id entspricht
    //// wenn er das nicht tut, darf er bleiben => wunsch mit der gesuchten id wird gelöscht
    setWishes((oldWishes) => oldWishes.filter((wish) => wish.id !== deleteId));
  };
  return (
    <div>
      <h1 className="text-4xl">My Wishlist 🎄 🎁</h1>
      <WishForm setWishes={setWishes} />
      <WishList wishes={wishes} />
    </div>
  );
}

export default App;
