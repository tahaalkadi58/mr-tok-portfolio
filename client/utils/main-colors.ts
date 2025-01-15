import { services_items_data } from "./Class_services_items";

interface bg_linear {
  "first-color": string;
  "second-color": string;
}

const background_linear: bg_linear[] = services_items_data.map(
  ({ mainColor, secondColor }, i) => {
    return { "first-color": mainColor, "second-color": secondColor };
  },
);

export default background_linear;
