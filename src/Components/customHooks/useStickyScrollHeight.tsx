import { useEffect, RefObject } from "react";

// Interface für die Options-Parameter. Hier können Funktionen übergeben werden,
// die aufgerufen werden, wenn ein Element den Viewport betritt (onEnter) oder verlässt (onLeave).
interface Options {
  onEnter?: (entry: IntersectionObserverEntry) => void; // Wird aufgerufen, wenn das Element in den Viewport eintritt
  onLeave?: (entry: IntersectionObserverEntry) => void; // Wird aufgerufen, wenn das Element den Viewport verlässt
}

// Custom Hook: useStickyScroll
// Der Hook nimmt eine Liste von Ref-Objekten (`refs`) und Options entgegen.
// Dieser Hook fügt die Sticky-Klasse zu den Elementen hinzu, wenn sie sichtbar sind, und entfernt sie, wenn das letzte Element den oberen Rand erreicht.
export function useStickyScroll(
  refs: RefObject<HTMLElement>[], // Array von Referenzen zu HTML-Elementen
  options: Options // Optionen für den Eintritt und Austritt der Elemente
) {
  useEffect(() => {
    // Überprüfe die Höhe des Viewports
    const viewportHeight = window.innerHeight;
    const isViewportLarge = viewportHeight > 600;

    // Wenn der Viewport 600px oder kleiner ist, beende den Hook
    if (!isViewportLarge) {
      return;
    }

    // Funktion, die beim Scrollen aufgerufen wird.
    // Sie überprüft, ob das letzte Element in der Liste den oberen Rand des Viewports erreicht hat.
    const handleScroll = () => {
      const lastRef = refs[refs.length - 1].current; // Nimm die letzte Referenz aus dem Array
      if (lastRef) {
        const rect = lastRef.getBoundingClientRect(); // Hole die Position des letzten Elements relativ zum Viewport
        if (rect.top <= 0) {
          // Wenn das letzte Element den oberen Rand erreicht hat
          // Entferne die "sticky"-Klasse von allen Elementen
          refs.forEach((ref) => {
            if (ref.current) {
              ref.current.classList.remove("sticky");
            }
          });
        }
      }
    };

    // IntersectionObserver wird verwendet, um zu überwachen, ob die beobachteten Elemente
    // in den Viewport eintreten oder ihn verlassen.
    const observer = new IntersectionObserver(
      (entries) => {
        // Für jede Änderung der Sichtbarkeit wird diese Funktion aufgerufen
        entries.forEach((entry) => {
          if (entry.isIntersecting && options.onEnter) {
            // Wenn das Element den Viewport betritt und die onEnter-Funktion definiert ist
            options.onEnter(entry); // Rufe die onEnter-Funktion auf
          } else if (!entry.isIntersecting && options.onLeave) {
            // Wenn das Element den Viewport verlässt und die onLeave-Funktion definiert ist
            options.onLeave(entry); // Rufe die onLeave-Funktion auf
          }
        });
      },
      {
        rootMargin: "0px", // Standardabstand für die Erkennung (kein Offset)
        threshold: 0, // 0 bedeutet, dass die Observer-Funktion aufgerufen wird, sobald das Element den Viewport betritt oder verlässt
      }
    );

    // Beobachte jedes Element, das in `refs` übergeben wurde
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current); // Beginne die Beobachtung des Elements
      }
    });

    // Füge den Scroll-Eventlistener hinzu, um das letzte Element auf seine Position zu überwachen
    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion, die beim Entmounten des Hooks oder beim Neurendern aufgerufen wird.
    return () => {
      observer.disconnect(); // Stoppe das Beobachten aller Elemente durch den Observer
      window.removeEventListener("scroll", handleScroll); // Entferne den Scroll-Eventlistener

      // Entferne die "sticky"-Klasse von allen Elementen
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.classList.remove("sticky");
        }
      });
    };
  }, [refs, options.onEnter, options.onLeave]); // Abhängigkeiten: Der Effekt wird neu ausgeführt, wenn sich diese ändern
}
