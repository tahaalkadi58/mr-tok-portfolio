import FooterInfoWidget from "./components/FooterInfoWidget";
import SubscribeWidget from "./components/SubscribeWidget";
import UseFullLinks from "./components/UseFullLinks";
import CopyRightWidget from "./components/CopyRightWidget";
import FooterTop from "./components/FooterTop";

export default function ContactUs() {
  return (
    <footer className="contact-us p-section" id="contact-us">
      <FooterTop></FooterTop>
      <div className="footer-content">
        <FooterInfoWidget></FooterInfoWidget>
        <UseFullLinks />
        <SubscribeWidget />
      </div>
      <div className="globals"></div>
      <CopyRightWidget />
    </footer>
  );
}
