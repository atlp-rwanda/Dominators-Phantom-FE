import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomButton from "../../components/Buttons/CustomeButton";
import RouteComponent from "../../modals/RouteModal/RouteModal";
import RouteSkeleton from "./RouteSkeleton";
import { getAllRoute, deleteRoute } from "../../module/actions/routeAction";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import "./crud-routes.css";
import { FaRoute } from "react-icons/fa";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import UpdateRoute from "../../modals/RouteModal/UpdateRoute";
import swal from "sweetalert";

function CrudRoute(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModal, setUpdateModal] = useState(false);
  const { isData, isLoaded } = props;
  const [routeData, setRouteData] = useState([]);
  const [isChecked, setIsChecked] = useState({ "089": false });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  let NoRows = 1;

  let selectedRoutes = [];

  useEffect(() => {
    props.getAllRoute(page, size);
    Object.entries(isChecked).map((values) => {
      if (values[1])
        return selectedRoutes.push({
          value: values[0],
          label: values[0],
        });
    });
  }, [page, size, isChecked]);

  const handleDelete = (routeId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        toast.success("Route Delete Successfully");
        props.deleteRoute(routeId);
        location.reload();
      }
    });
  };
  const handleSearch = (e) => {};

  const handleSelectData = (e) => {
    setSize(e.target.value);
  };

  const handlePageClick = (e) => {
    setPage(e.selected);
  };

  const HandleIsChecked = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  // useEffect(() => {
  //   Object.entries(isChecked).map((values) => {
  //     if (values[1])
  //       return selectedRoutes.push({
  //         value: values[0],
  //         label: values[0],
  //       });
  //   });
  // }, [isChecked]);
  return (
    <>
      <ToastContainer theme="colored" />
      <Header />
      <Sidebar />
      <div className="main">
        <BreadCrumb icon={<FaRoute />} title="LIST OF ROUTE" />
        <div className="content">
          <div
            className="btn-add-route"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <CustomButton classes="btn btn-green btn-radius">
              Add Route
            </CustomButton>{" "}
          </div>
          <div className="route-table">
            <div className="beforetbl">
              <div className="PageSize">
                <label>Show:</label>
                <select onChange={handleSelectData}>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>{" "}
                <label>Entries</label>
              </div>
              <div className="search">
                <label>Search:</label>{" "}
                <input type="search" onChange={handleSearch}></input>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {isData.result?.map((value, idx) => (
                    <tr key={idx}>
                      <td scope="row">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id={idx}
                          name={value.id}
                          onChange={HandleIsChecked}
                        />
                        {NoRows++}.
                      </td>
                      <td scope="row">
                        {value.origin + "-" + value.destination}
                      </td>
                      <td scope="row">{value.code}</td>
                      <td scope="row">{value.distance} Km</td>
                      <td
                        scoper="row"
                        className={
                          value.status === "pending"
                            ? "pendingStatus tooltip"
                            : ""
                        }
                      >
                        {value.status}
                        <span className="tooltiptext">Change Status</span>
                      </td>
                      <td scope="row">
                        <Link
                          to="#"
                          className="edit-icon"
                          onClick={() => {
                            setUpdateModal(true);
                            setRouteData({
                              id: value.routeId,
                              distance: value.distance,
                              from: value.origin,
                              to: value.destination,
                              code: value.code,
                              fromLatitude: value.fromCoordinates[0],
                              fromLongitude: value.fromCoordinates[1],
                              toLatitude: value.toCoordinates[0],
                              toLongitude: value.toCoordinates[1],
                            });
                          }}
                        >
                          <HiPencil />
                        </Link>

                        <Link
                          to="#"
                          className="delete-icon"
                          onClick={(e) => handleDelete(value.routeId)}
                        >
                          <HiTrash />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <RouteSkeleton />
              )}
              {isLoaded ? (
                <tfoot>
                  <tr>
                    <td colSpan={6}>
                      <div className="table-paginate">
                        <div>
                          Showing {isData?.result?.length} of{" "}
                          {isData.totalItems} with in {isData.totalPages} Pages
                        </div>
                        <ReactPaginate
                          nextLabel="next"
                          renderOnZeroPageCount={null}
                          onPageChange={handlePageClick}
                          pageCount={isData.totalPages}
                          breakLabel="..."
                          previousLabel="previous"
                          activeClassName="active"
                          pageRangeDisplayed={1}
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
          {isOpen && <RouteComponent setIsOpen={setIsOpen} />}
          {isUpdateModal && (
            <UpdateRoute
              setUpdateModal={setUpdateModal}
              routeData={routeData}
            />
          )}
        </div>
      </div>
    </>
  );
}
const mapState = ({ route }) => ({
  isData: route.data,
  isLoaded: route.isLoaded,
});
export default connect(mapState, {
  getAllRoute: getAllRoute,
  deleteRoute: deleteRoute,
})(CrudRoute);
