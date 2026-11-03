import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Lets a page hide the navigation bar while its cinematic intro fills the screen.
 * Pages without an intro never touch this, so the bar is always shown there.
 */
const NavContext = createContext<{ hidden: boolean; setHidden: (hidden: boolean) => void }>({
  hidden: false,
  setHidden: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  return <NavContext.Provider value={{ hidden, setHidden }}>{children}</NavContext.Provider>;
}

export function useNav() {
  return useContext(NavContext);
}

/** Hides the nav bar while this component is mounted and `hide` is true. */
export function useHideNav(hide: boolean) {
  const { setHidden } = useNav();
  useEffect(() => {
    setHidden(hide);
  }, [hide, setHidden]);
  useEffect(() => () => setHidden(false), [setHidden]);
}
