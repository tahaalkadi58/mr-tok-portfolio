export class Class_List_Item {
  public id;
  static #last_id = -1;
  constructor(
    public name: string,
    public href: string,
    public icon: string,
  ) {
    this.name = name;
    this.href = href;
    this.icon = icon;
    this.id = ++Class_List_Item.#last_id;
  }
}

export const list_item = [
  new Class_List_Item("about me", "about-me", "fa-solid fa-info"),
  new Class_List_Item("my skills", "services", "fa-solid fa-handshake-angle"),
  new Class_List_Item("my projects", "our-works", "fa-solid fa-trophy"),
  new Class_List_Item("testimonials", "testimonials", "fa-solid fa-phone"),
  new Class_List_Item("contact me", "contact-us", "fa-solid fa-phone"),
];
