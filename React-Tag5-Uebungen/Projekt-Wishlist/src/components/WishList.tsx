import { Wish } from "../App";

type WishListProps = {
  wishes: Wish[];
  deleteWish: (deleteID: string) => void;
};

function WishList({ wishes }: WishListProps) {
  return (
    <ul>
      {wishes.map((wish) => (
        <li key={wish.id}>
          {wish.title}
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default WishList;
