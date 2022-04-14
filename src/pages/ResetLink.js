import ResetLinkComponent from "../components/ResetPassword/ResetLinkComponent";
import UserNavbar from "../components/Navbars/UserNavbar";
import Footer from "../components/Footer/Footer";
const ResetLink = () => {
  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div>
        {" "}
        <ResetLinkComponent />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default ResetLink;
