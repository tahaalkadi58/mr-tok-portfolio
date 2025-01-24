import designFeather from "client/assets/photos/design_feather.png";
import designTv from "client/assets/photos/design_tv.png";
import penDesign from "client/assets/photos/pen_design.png";
import yellowPenDesign from "client/assets/photos/yellow_pen_design.png";

export default function LeftSide() {
  const designerImgs = [designFeather, designTv, penDesign, yellowPenDesign];

  const imgClass = ["red", "blue", "green", "yellow"];

  const images = designerImgs.map((el, i) => {
    let aos = "";
    switch (imgClass[i]) {
      case "red":
        aos = "fade-up-right";
        break;
      case "green":
        aos = "fade-up-left";
        break;
      case "yellow":
        aos = "fade-down";
        break;
      default:
        aos = "";
        break;
    }
    return (
      <div
        key={i}
        className={`${imgClass[i]} rellax img`}
        data-rellax-speed={i + 1}
      >
        <img
          src={el}
          alt={`Design element ${i + 1}`}
          data-aos={aos}
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    );
  });

  return (
    <div className="profile-left-container">
      <div className="profile-left">
        <div className="profile-left rellax" data-rellax-speed="2">
          <h2
            className="h-1 designer"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <span>Designer</span>
            <span className="before">Designer</span>
          </h2>
          <h4>
            <p
              className="design-slogan slogan"
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              Self learned, design Like experted!
            </p>
          </h4>
        </div>
        {images}
      </div>
    </div>
  );
}
