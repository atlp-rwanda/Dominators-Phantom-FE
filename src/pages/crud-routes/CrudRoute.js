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

  useEffect(() => {
    props.getAllRoute();
  }, []);
  const handleDelete = (routeId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.deleteRoute(routeId);
        toast.success("Route Delete Successfully");
      } else {
      }
    });
  };

  const HandleIsChecked = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  let selectedRoutes = [];
  console.log(selectedRoutes);
  useEffect(() => {
    Object.entries(isChecked).map((values) => {
      if (values[1])
        return selectedRoutes.push({
          value: values[0],
          label: values[0],
        });
    });
  }, [isChecked]);
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
            <table>
              <thead className="thead">
                <tr>
                  <th width="10%" scope="col">
                    No
                  </th>
                  <th scope="col">Route</th>
                  <th scope="col">Code</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {isData.map((value, idx) => {
                    return (
                      <tr key={idx}>
                        <td key={value.id} scope="row">
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={idx}
                            name={value.id}
                            onChange={HandleIsChecked}
                          />
                          {value.id}
                        </td>
                        <td scope="row">{value.from + "-" + value.to}</td>
                        <td scope="row">{value.code}</td>
                        <td scope="row">{value.distance}</td>
                        <td scope="row">
                          <Link
                            to="#"
                            className="edit-icon"
                            onClick={() => {
                              setUpdateModal(true);
                              setRouteData({
                                id: value.id,
                                distance: value.distance,
                                from: value.from,
                                to: value.to,
                                code: value.code,
                              });
                            }}
                          >
                            <HiPencil />
                          </Link>

                          <Link
                            to="#"
                            className="delete-icon"
                            onClick={(e) => handleDelete(value.id)}
                          >
                            <HiTrash />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
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
