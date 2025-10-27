import { useEffect, useState } from "react";

const canUseMatchMedia = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function";

export const useMediaQuery = (query) => {
  const getMatches = () => (canUseMatchMedia() ? window.matchMedia(query).matches : false);

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (!canUseMatchMedia()) {
      setMatches(false);
      return undefined;
    }

    const mediaQueryList = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", onChange);
    } else {
      mediaQueryList.addListener(onChange);
    }

    // Ensure state stays in sync with the current match status.
    setMatches(mediaQueryList.matches);

    return () => {
      if (typeof mediaQueryList.removeEventListener === "function") {
        mediaQueryList.removeEventListener("change", onChange);
      } else {
        mediaQueryList.removeListener(onChange);
      }
    };
  }, [query]);

  return matches;
};
