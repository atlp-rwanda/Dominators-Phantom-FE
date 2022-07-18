import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomButton from "../../components/Buttons/CustomeButton";
import BusCumponent from "../../modals/BusModal/BusModel";
import BusSkeleton from "./BusSkeleton";
import { getAllBuses, deleteBus } from "../../module/actions/busActions";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import "./crud-routes.css";
import { FaRoute } from "react-icons/fa";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import UpdateBus from "../../modals/BusModal/UpdateBus";
import swal from "sweetalert";

function CrudBus(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModal, setUpdateModal] = useState(false);
  const { bus, isLoaded } = props;
  const [busData, setBusData] = useState([]);
  const [isChecked, setIsChecked] = useState({ "089": false });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  let selectedBuses = [];

  useEffect(() => {
    props.getAllBuses(page, size);
    Object.entries(isChecked).map((values) => {
      if (values[1])
        return selectedBuses.push({
          value: values[0],
          label: values[0],
        });
    });
  }, [page, size, isChecked]);
  const { result } = props.bus;

  const handleDelete = (busId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.deleteBus(busId);
        toast.success("Bus Delete Successfully");
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
  return (
    <>
      <ToastContainer theme="colored" />
      <Header />
      <Sidebar />
      <div className="main">
        <BreadCrumb icon={<FaRoute />} title="LIST OF BUSES" />
        <div className="content">
          <div
            className="btn-add-route"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <CustomButton classes="btn btn-green btn-radius">
              Add Bus
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
                  <th scope="col">Bus</th>
                  <th scope="col">Bus TYpe</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {result?.map((value, idx) => {
                    return (
                      <tr key={idx}>
                        <td scope="row">
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={idx + 1}
                            name={idx + 1}
                            onChange={HandleIsChecked}
                          />
                          {idx + 1}
                        </td>
                        <td className="route-col" scope="row">
                          {value.routes.origin + "-" + value.routes.destination}
                        </td>
                        <td scope="row">{value.prateNumber}</td>
                        <td scope="row">{value.busType}</td>
                        <td scope="row">
                          <Link
                            to="#"
                            className="edit-icon"
                            onClick={() => {
                              setUpdateModal(true);
                              setBusData({
                                id: value.id,
                                plateNumber: value.prateNumber,
                                routes:value.routes.origin + "-" + value.routes.destination,
                                busType: value.busType,
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
                <BusSkeleton />
              )}
              {isLoaded ? (
                <tfoot>
                  <tr>
                    <td colSpan={6}>
                      <div className="table-paginate">
                        <div>
                          Showing {bus?.result?.length} of {bus.totalItems} with
                          in {bus.totalPages} Pages
                        </div>
                        <ReactPaginate
                          nextLabel="next"
                          renderOnZeroPageCount={null}
                          onPageChange={handlePageClick}
                          pageCount={bus?.totalPages}
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
          {isOpen && <BusCumponent setIsOpen={setIsOpen} />}
          {isUpdateModal && (
            <UpdateBus setUpdateModal={setUpdateModal} busData={busData} />
          )}
          {/* {detail && <RouteDetail setDetail={setDetail} />} */}
        </div>
      </div>
    </>
  );
}
const mapState = ({ bus }) => ({
  bus: bus.data,
  isLoaded: bus.isLoaded,
});
export default connect(mapState, {
  getAllBuses: getAllBuses,
  deleteBus: deleteBus,
})(CrudBus);
