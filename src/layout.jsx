import Foot from "./components/footer/footer";
import Nav from "./components/navbar/navbar";
import ScrollToTop from "./components/scrolltopbutton/scrolltopbutton";

function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <Foot />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
