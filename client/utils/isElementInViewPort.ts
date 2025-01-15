export default function IsElementInViewport(el: any) {
  const element = el as HTMLElement;
  return (
    window.scrollY >= element?.offsetTop - 50 &&
    window.scrollY <= element?.offsetTop + element?.offsetWidth
  );
}
