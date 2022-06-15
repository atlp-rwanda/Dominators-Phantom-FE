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
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    props.getAllRouteForUser(page, size, search);
  }, [page, search, size]);
  const handleSelectData = (e) => {
    setSize(e.target.value);
  };
  const handlePageClick = (e) => {
    setPage(e.selected);
  };
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
            <div className="beforetbl">
              <div className="PageSize">
                <label>Show :</label>
                <select onChange={handleSelectData}>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>{" "}
                <label>Entries</label>
              </div>
              <div className="search-r">
                <input
                  type="text"
                  className="search-route"
                  onChange={HandleSearch}
                  placeholder="Search Route"
                ></input>
                <FaSearch className="search-icon" />
              </div>
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
                  {isData.searchData.length > 0 ? (
                    isData.searchData.map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <td scope="row">{NoRows++}.</td>
                          <td scope="row">
                            {value.origin + "-" + value.destination}
                          </td>
                          <td scope="row">{value.code}</td>
                          <td scope="row">{value.distance} KM</td>
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
                          nextLabel="next"
                          renderOnZeroPageCount={null}
                          pageRangeDisplayed={1}
                          onPageChange={handlePageClick}
                          pageCount={isData.datas.totalPages}
                          breakLabel="..."
                          previousLabel="previous"
                          activeClassName="active"
                          marginPagesDisplayed={2}
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
