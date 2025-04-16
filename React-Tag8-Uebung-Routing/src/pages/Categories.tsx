import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <section className="hero">
        <button>
          <Link to="/categories">Explore Categories</Link>
        </button>
      </section>
    </div>
  );
}

export default Categories;
