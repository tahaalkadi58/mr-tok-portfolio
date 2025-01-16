import { FunctionComponent } from "react";
const SubscribeWidget: FunctionComponent = () => {
  return (
    <div className="footer-widget">
      <div className="footer-widget-heading">
        <h3>Subscribe</h3>
      </div>
      <div className="footer-text">
        <p>
          Don’t miss to subscribe to our new feeds, kindly fill the form below.
        </p>
      </div>
      <div className="subscribe-form">
        <form action="#">
          <input type="text" placeholder="Email Address" />
          <button>
            <i className="fab fa-telegram-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeWidget;
