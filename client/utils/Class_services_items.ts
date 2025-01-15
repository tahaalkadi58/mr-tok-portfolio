import NextJS from "../assets/photos/nextjs.svg?react";
import MongoDB from "../assets/photos/mongodb.svg?react";
import NodeJS from "../assets/photos/node.svg?react";
import TailwindCSS from "../assets/photos/tailwindcss.svg?react";
const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

`;
class ServicesItemsClass {
  id;
  static #last_id = -1;
  constructor(
    public description: string,
    public title: string,
    public isIcon: boolean,
    public mainColor: string,
    public secondColor: string,
    public percentage: string,
    public icon?: string,
  ) {
    this.description = description;
    this.icon = icon;
    this.title = title;
    this.isIcon = isIcon;
    this.mainColor = mainColor;
    this.secondColor = secondColor;
    this.percentage = percentage;
    this.id = ++ServicesItemsClass.#last_id;
  }
}
export const services_items_data = [
  new ServicesItemsClass(
    "NodeJS enables fast, scalable backend solutions with its powerful JavaScript runtime.",
    "NodeJS",
    false,
    "#8CC84B",
    "#A9D56B",
    "75",
  ),
  new ServicesItemsClass(
    "ReactJS builds dynamic interfaces with ease, offering flexibility and high performance.",
    "ReactJS",
    true,
    "#61DAFB",
    "#85E1FB",
    "32",
    "fa-brands fa-react",
  ),
  new ServicesItemsClass(
    "TailwindCSS simplifies modern web design with its utility-first and responsive approach.",
    "TailwindCSS",
    false,
    "#38BDF8",
    "#6CCAFD",
    "25",
  ),
  new ServicesItemsClass(
    "NextJS delivers advanced React apps with server-side rendering and improved SEO tools.",
    "NextJS",
    false,
    "#000000",
    "#333333",
    "19",
  ),
  new ServicesItemsClass(
    "MongoDB handles complex data effortlessly with its scalable and flexible NoSQL design.",
    "MongoDB",
    false,
    "#47A248",
    "#66B765",
    "45",
  ),
  new ServicesItemsClass(
    "And More! Explore more tools for enhancing your projects with cutting-edge solutions.",
    "And More!",
    true,
    "cornflowerblue",
    "lightblue",
    "",
    "fa fa-plus",
  ),
];

export const svgIcons = {
  NextJS,
  NodeJS,
  MongoDB,
  TailwindCSS,
} as const;

export type SvgIconKey = keyof typeof svgIcons;
