import Card from "@/components/Card";
import Navbar from "./Navbar";

const Layout = ({ heroes }) => {
  return (
    <div className="">
      <Navbar />
      <Card heroes={heroes} />
    </div>
  );
};

export default Layout;
