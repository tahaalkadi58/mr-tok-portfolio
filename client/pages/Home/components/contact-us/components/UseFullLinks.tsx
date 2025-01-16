import { FunctionComponent } from "react";
import { Class_List_Item } from "client/utils/Class_list_item";
const usefullLinks = [
  new Class_List_Item("Home", "#", ""),
  new Class_List_Item("about", "#", ""),
  new Class_List_Item("services", "#", ""),
  new Class_List_Item("portfolio", "#", ""),
  new Class_List_Item("Contact", "#", ""),
  new Class_List_Item("About us", "#", ""),
  new Class_List_Item("Our Services", "#", ""),
  new Class_List_Item("Expert Team", "#", ""),
  new Class_List_Item("Contact us", "#", ""),
  new Class_List_Item("Latest News", "#", ""),
];
const UseFullLinks: FunctionComponent = () => {
  const Links = usefullLinks.map(({ id, name, href }) => {
    return (
      <li key={id} id={`${id}`}>
        <a href={href}>{name}</a>
      </li>
    );
  });
  return (
    <div className="footer-widget usefull-links">
      <div className="footer-widget-heading">
        <h3>Useful Links</h3>
      </div>
      <ul>{Links}</ul>
    </div>
  );
};

export default UseFullLinks;
