import { useState } from "react";

//! anmerkung: habe hier extrem viel kommentiert um zum üben und mir nochmal bewusst zu machen, was genau in jedem schritt passiert

//// Komponente für Newsletter-Formular
export function NewsletterForm() {
  //// State für E-Mail-Feld
  const [email, setEmail] = useState("");
  //// State für Zustand der Checkbox
  const [checked, setChecked] = useState(false);
  //// State, ob Formular erfolgreich abgeschickt wurde
  const [isSubscribed, setIsSubscribed] = useState(false);

  //// Funktion, die beim Abschicken des Formulars ausgeführt wird
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //// Verhindert das automatische Neuladen der Seite
    e.preventDefault();
    //// Prüft, ob E-Mail ein "@" enthält & Checkbox angeklickt wurde
    if (email.includes("@") && checked) {
      //// Setzt Zustand auf "erfolgreich angemeldet"
      setIsSubscribed(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="checkbox"
          id="agree"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="agree">I agree to receive the newsletter.</label>
        <button type="submit">Submit</button>
      </form>

      {/* Zeigt Nachricht nur, wenn Anmeldung erfolgreich war */}
      {isSubscribed && <p>Thank you! You are now subscribed</p>}
    </div>
  );
}

export default NewsletterForm;
