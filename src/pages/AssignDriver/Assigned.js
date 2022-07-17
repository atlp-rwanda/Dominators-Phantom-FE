import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomButton from "../../components/Buttons/CustomeButton";
import { MdAssignmentReturned } from "react-icons/md";
import AssignModal from "../../modals/AssignDriverModal/AssignModal";
import UpdateAssign from "../../modals/AssignDriverModal/UpdateAssign";
import AssignedSkeleton from "./AssignedSkeleton";
import ReactPaginate from "react-paginate";
import {
  getAllDriverAssignToBuses,
  deleteDriverAssignToBuses,
} from "../../module/actions/assignBuseAction";
import { Link } from "react-router-dom";
import { HiTrash, HiPencil } from "react-icons/hi";
import "./assigned.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import swal from "sweetalert";
function Assigned(props) {
  const { assigned, isLoaded } = props;
  const { data } = assigned;
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModal, setIsUpdateModel] = useState(false);
  const [AssignData, setAssignData] = useState([]);
  const [isChecked, setIsChecked] = useState({ 90: false });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  let NoRows = 1;
  useEffect(() => {
    props.getAllDriverAssignToBuses(page, size);
  }, []);
  useEffect(() => {
    if (assigned.lenght > 0) {
      assigned.map(({ id }) => {
        return setIsChecked({ [id]: false });
      });
    }
  }, [assigned]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.deleteDriverAssignToBuses(id);
        toast.success("Assigned Delete Successfully");
        location.reload();
      } else {
      }
    });
  };
  const handlePageClick = (e) => {
    setPage(e.selected);
  };
  const handleSingleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  return (
    <>
      <Header />
      <Sidebar />
      <ToastContainer theme="colored" />
      <div className="main">
        <BreadCrumb icon={<MdAssignmentReturned />} title="LIST OF ASSIGNED" />
        <div className="content">
          <div
            className="btn-add-route"
            style={{}}
            onClick={(e) => setIsOpen(true)}
          >
            <CustomButton classes="btn btn-green btn-radius">
              Assign Driver
            </CustomButton>
          </div>
          <div className="route-table">
            <table>
              <thead className="thead">
                <tr>
                  <th>No</th>
                  <th>Driver Email</th>
                  <th>Driver Name</th>
                  <th>Plate Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {data
                    ? data.result?.map((value, idx) => {
                        return (
                          <tr key={idx}>
                            <td key={value.id} scope="row">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value={value.id}
                                onClick={handleSingleCheck}
                              />
                              {NoRows++}
                            </td>
                            <td scope="row">{value.Users.email}</td>
                            <td scope="row">
                              {value.Users.firstName + value.Users.lastName}
                            </td>
                            <td scope="row">{value.Buses.prateNumber}</td>
                            <td scope="row">
                              <Link
                                to="#"
                                className="edit-icon"
                                onClick={(e) => {
                                  e.preventDefault;
                                  setIsUpdateModel(true);
                                  setAssignData({
                                    userEmail: value.Users.email,
                                    name:
                                      value.Users.firstName +
                                      value.Users.lastName,
                                    busePlateNumber: value.Buses.prateNumber,
                                    id: value.id,
                                    buseId: value.BusId,
                                    userId: value.UserId,
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
                      })
                    : ""}
                </tbody>
              ) : (
                <AssignedSkeleton />
              )}
              {isLoaded ? (
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      <div className="table-paginate">
                        <div>
                          Showing {data?.result?.length} of {data?.totalItems}{" "}
                          with in {data?.totalPages} Pages
                        </div>
                        <ReactPaginate
                          nextLabel="next"
                          renderOnZeroPageCount={null}
                          pageRangeDisplayed={1}
                          onPageChange={handlePageClick}
                          pageCount={data?.totalPages}
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
          {isOpen ? <AssignModal setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
          {isUpdateModal && (
            <UpdateAssign
              setIsUpdateModel={setIsUpdateModel}
              AssignData={AssignData}
            />
          )}
        </div>
      </div>
    </>
  );
}
const mapState = ({ assigned }) => ({
  assigned: assigned.data,
  isLoaded: assigned.isLoaded,
});
export default connect(mapState, {
  getAllDriverAssignToBuses: getAllDriverAssignToBuses,
  deleteDriverAssignToBuses: deleteDriverAssignToBuses,
})(Assigned);
