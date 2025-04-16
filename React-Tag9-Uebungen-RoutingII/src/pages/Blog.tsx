import { useEffect, useState } from "react";
import { BlogEntry } from "../types/BlogEntry";
import { Link } from "react-router-dom";
import { blogData } from "../assets/data/BlogData";

function Blog() {
  const [blogEntries, setBlogEntries] = useState<BlogEntry[] | null>(null);
  // # da ich hier alle Blogeinträge anzeigen möchte, brauche ich keine Parameter => useParams

  useEffect(() => {
    setBlogEntries(blogData);
  }, []);

  // # ich hatte dieses return-statement fälschlicherweise zuerst VOR dem hook useEffect, remember: Hooks immer an den Anfang der Funktionskomponente
  if (!blogEntries) return <p>Entry not found</p>;

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-grid">
        {blogEntries.map((entry) => (
          <div key={entry.id} className="card">
            <h2>{entry.title}</h2>
            <p className="date">{entry.published_date}</p>
            <p className="author">{entry.author}</p>
            <p className="description">{entry.description}</p>
            <img src={entry.img_url} alt={entry.title} />
            <Link to={`/blog/${entry.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
