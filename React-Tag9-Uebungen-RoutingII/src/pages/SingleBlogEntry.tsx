import { useEffect, useState } from "react";
import { BlogEntry } from "../types/BlogEntry";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../assets/data/BlogData";

function SingleBlogEntry() {
  //# hatte hier SingleBlogEntry zuerst fälschlicherweise als Array von BlogEntry deklariert (BlogEntry[]), obwohl ich es hier als einzelnes Objekt verwende. Deshalb waren die Eigenschaften (id, name etc) nicht vorhanden
  const [SingleBlogEntry, setSingleBlogEntry] = useState<BlogEntry | null>(
    null
  );
  // - die leeren klammern am ende => funktionsaufrauf
  //- hier brauche ich useParams, um den Parameter id aus der URL zu extrahieren und so einen bestimmten Blogartikel basierend auf dem URL-Paramter "id" anzuzeigen
  const { id } = useParams<{ id: string }>();
  console.log(id);

  // - useEffect lädt/verarbeitet die Daten, nachdem die Komponente gerendert wurde
  useEffect(() => {
    // - id darf nicht undefined sein, bevor es an parseInt übergeben wird, weil parseInt einen String erwartet
    if (id !== undefined) {
      // - find() durchläuft das blogData-Array & sucht nach dem 1. Eintrag, der die Bedingung der Callback-Funktion erfüllt (also suche nach Eintrag dessen id der aus der URL extrahierten id entspricht)
      // - parseInt(id): da die id aus der URL ein String ist, die id-Eigenschaft im blogData-Array eine Number ist, muss der String in eine Zahl umgewandelt werden um in mit Daten-id vergleichbar zu machen
      //
      const findEntry = blogData.find((entry) => entry.id === parseInt(id));
      // - wenn passender Eintrag gefunden wurde, wird er durch das Aufrufen von setSingleBlogEntry im State gespeichert
      // - nullish coalescing operator prüft: dass setSingleBlogEntry  ein BlogEntry-Objekt oder null enthält
      setSingleBlogEntry(findEntry ?? null);
    }
  }, [id]);

  // # Nullprüfung
  if (!SingleBlogEntry) return <p>Entry not found</p>;

  return (
    <div className="blog-container">
      <h1>{SingleBlogEntry.title}</h1>
      <div className="blog-grid">
        <div key={SingleBlogEntry.id} className="card">
          <h2>{SingleBlogEntry.title}</h2>
          <p className="date">{SingleBlogEntry.published_date}</p>
          <p className="author">{SingleBlogEntry.author}</p>
          <p className="description">{SingleBlogEntry.description}</p>
          <img src={SingleBlogEntry.img_url} alt={SingleBlogEntry.title} />
          <Link to={`/blog/${SingleBlogEntry.id}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogEntry;
