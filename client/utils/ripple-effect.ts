export default function createRipple(event: globalThis.MouseEvent) {
  const { clientX, clientY, currentTarget } = event;
  const target = currentTarget as HTMLElement;
  const { top, left } = target.getBoundingClientRect();
  const circle = document.createElement("span");
  circle.classList.add("ripple-span");
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;
  const x = clientX - left;
  const y = clientY - top;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");

  const ripple = target.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  target.appendChild(circle);
}
