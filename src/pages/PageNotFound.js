import UserNavbar from "../components/Navbars/UserNavbar";
import Footer from "../components/Footer/Footer";

function PageNotFound() {
  return (
    <>
      <UserNavbar />
      <div className="pagenotfound">

      <h1>
        <div className="">404 Page Not Found 🤷‍♀️</div>
      </h1>

    </div>

     
      <Footer/>
    </>
  );
}

export default PageNotFound;
