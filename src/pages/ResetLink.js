import ResetLinkComponent from "../components/ResetPassword/ResetLinkComponent";
import UserNavbar from "../components/Navbars/UserNavbar";
import Footer from "../components/Footer/Footer";
import ResetPassword from "../components/ResetPassword/ResetPwdComponent";

const ResetLink = () => {
  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div>
        {!location.href.includes("?") ? (
          <>
            <ResetLinkComponent />
          </>
        ) : (
          <>
            <ResetPassword />
          </>
        )}
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default ResetLink;
