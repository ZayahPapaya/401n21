const { createElement: e, useState } = require("react");

const Header = ({ siteName, headerColor }) =>
  e(
    "header",
    {
      style: {
        color: `rgb(${headerColor[0]}, ${headerColor[1]}, ${headerColor[2]})`,
      },
    },
    e("h1", {}, siteName)
  );

const Cookie = () => {
  let [clicks, setClicks] = useState(0);

  const handleClick = () => {
    console.log("Cookies clicked");
    setClicks(clicks + 1);
  };

  return e("button", { onClick: handleClick }, `Clicks: ${clicks}`);
};

const App = () =>
  e(
    React.Fragment,
    {},
    e(Header, { siteName: "My Website", headerColor: [22, 58, 77] }),
    e(Cookie, {})
  );

const main = () => {
  const domContainer = document.querySelector("#root");
  const root = ReactDOM.createRoot(domContainer);
  const app = e(App);
  root.render(app);
};

module.exports = { main, Cookie, Header };
