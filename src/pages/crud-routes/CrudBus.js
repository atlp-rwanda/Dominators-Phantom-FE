import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomButton from "../../components/Buttons/CustomeButton";
import BusComponent from "../../modals/BusModal/BusModal";
import BusSkeleton from "./BusSkeleton";
import { getAllBuses, deleteBus } from "../../module/actions/busAction";
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
  const { isData, isLoaded } = props;
  const [busData, setBusData] = useState([]);
  const [isChecked, setIsChecked] = useState({ "089": false });

  useEffect(() => {
    props.getAllBuses();
  }, []);
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
      } else {
      }
    });
  };

  const HandleIsChecked = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  let selectedBuses = [];
  console.log(selectedBuses);
  useEffect(() => {
    Object.entries(isChecked).map((values) => {
      if (values[1])
        return selectedBuses.push({
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
                        <td scope="row">{value.bus}</td>
                        <td scope="row">{value.busType}</td>
                        <td scope="row">
                          <Link
                            to="#"
                            className="edit-icon"
                            onClick={() => {
                              setUpdateModal(true);
                              setBusData({
                                id: value.id,
                                plateNumber: value.plateNumber,
                                from: value.from,
                                to: value.to,
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
          {isOpen && <BusComponent setIsOpen={setIsOpen} />}
          {isUpdateModal && (
            <UpdateBus
              setUpdateModal={setUpdateModal}
              busData={busData}
            />
          )}
        </div>
      </div>
    </>
  );
}
const mapState = ({ bus }) => ({
  isData: bus.data,
  isLoaded: bus.isLoaded,
});
export default connect(mapState, {
  getAllBuses: getAllBuses,
  deleteBus: deleteBus,
})(CrudBus);
