import { createContext, useContext } from "react";

// load, scroll, resize
export interface iresizeEvent {
  windowWidth: number;
  windowHeight: number;
}
const WindowLoadEvent = createContext<{ isLoad: boolean }>({ isLoad: false });
const WindowScrollEvent = createContext<{ scrollY: number }>({
  scrollY: 0,
});
const WindowResizeEvent = createContext<iresizeEvent>({
  windowWidth: 0,
  windowHeight: 0,
});

const useWindowEvents = () => {
  const loadEvent = useContext(WindowLoadEvent);
  const scrollEvent = useContext(WindowScrollEvent);
  const resizeEvent = useContext(WindowResizeEvent);

  return { loadEvent, scrollEvent, resizeEvent };
};

export { WindowLoadEvent, WindowResizeEvent, WindowScrollEvent };

export default useWindowEvents;
