import UserNavbar from "../components/Navbars/UserNavbar";
import UserHeader from "../components/Headers/UserHeader";
function Home() {
  return (
    <div>
      <UserNavbar />
      <UserHeader />
      <div className="home-content">
        <h3>
          HOW DOES IT WORKER
        </h3>
        <div>
          <div className="col-3">Register</div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
