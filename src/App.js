import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import SidebarData from "./pages/Home/SidebarData";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="container" style={{ "padding-top": " 20px" }}>
        <div className="row">
          <div className="col-md-8">
            <Home></Home>
          </div>
          <div className="col-md-4">
            <SidebarData></SidebarData>
          </div>
        </div>
      </div>
    </>
  );
}
