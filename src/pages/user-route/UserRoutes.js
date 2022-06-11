import { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserNavbar from "../../components/Navbars/UserNavbar";
import { getAllRouteForUser } from "../../module/actions/routeAction";
import Footer from "../../components/Footer/Footer";
import ReactPaginate from "react-paginate";
import RouteSkeleton from "./RouteSkeleton";
import { FaSearch } from "react-icons/fa";
import "./UserRoute.css";
function UserRoute(props) {
  const { isData, isLoaded } = props;
  let NoRows = 1;
  const [search, setSearch] = useState("");
  useEffect(() => {
    props.getAllRouteForUser(search);
  }, [search]);

  const HandleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <>
      <UserNavbar />
      <div className="routeData">
        <h2>List Of Routes</h2>
        <div className="content">
          <div className="route-table">
            <div className="search-r">
              <input
                type="text"
                className="search-route"
                onChange={HandleSearch}
                placeholder="Search Route"
              ></input>
              <FaSearch className="search-icon" />
            </div>
            <table>
              <thead className="thead">
                <tr>
                  <th width="10%" scope="col">
                    No
                  </th>
                  <th scope="col">Route</th>
                  <th scope="col">Code</th>
                  <th scope="col">Distance</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {isData.length > 0 ? (
                    isData.map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <td scope="row">{NoRows++}.</td>
                          <td scope="row">{value.from + "-" + value.to}</td>
                          <td scope="row">{value.code}</td>
                          <td scope="row">{value.distance}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={4} className="search-no-found">
                        NO ROUTE IS AVAILABLE FOR THIS SEARCH
                      </td>
                    </tr>
                  )}
                </tbody>
              ) : (
                <RouteSkeleton />
              )}
              {isLoaded ? (
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      <div className="table-paginate">
                        <ReactPaginate
                          renderOnZeroPageCount={null}
                          pageRangeDisplayed={1}
                          pageCount={2}
                          breakLabel="..."
                          activeClassName="active"
                        />
                      </div>
                    </td>
                  </tr>
                </tfoot>
              ) : (
                ""
              )}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
const mapState = ({ route }) => ({
  isData: route.data,
  isLoaded: route.isLoaded,
});
export default connect(mapState, {
  getAllRouteForUser: getAllRouteForUser,
})(UserRoute);
