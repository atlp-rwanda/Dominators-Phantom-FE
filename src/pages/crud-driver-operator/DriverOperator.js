import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import AdminPageTitle from "../../components/admin-page-title/AdminPageTitle";
import CustomButton from "../../components/Buttons/CustomeButton";
import UserComponent from "../../modals/UserModal/UserModal";
import DriverOperatorSkeleton from "./DriverOperatorSkeleton";
import { getAllUser, deleteUser } from "../../module/actions/userAction";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import "./DriverOperator.css";
import icon from "./icon.svg";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import UpdateUser from "../../modals/UserModal/UpdateUser";
import swal from "sweetalert";

function DriverOperator(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateUser, setUpdateUser] = useState(false);
  const { isData, isLoaded } = props;
  const [userData, setUserData] = useState([]);
  const [isChecked, setIsChecked] = useState({ "089": false });

  useEffect(() => {
    props.getAllUser();
  }, []);

  const handleDelete = (userId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.deleteUser(userId);
        toast.success("User Delete Successfully");
      } else {
      }
    });
  };

  const HandleIsChecked = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  let selectedUsers = [];
  // console.log(selectedUsers);
  useEffect(() => {
    Object.entries(isChecked).map((values) => {
      if (values[1])
        return selectedUsers.push({
          value: values[0],
          label: values[0],
        });
    });
  }, [isChecked]);

  return (
    <div>
      <ToastContainer theme="colored" />
      <Header />
      <Sidebar />
      <div className="main">
        <AdminPageTitle icon={icon} title="Users" />
        <div className="content">
          <div
            className="btn-add-user"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <CustomButton classes="btn btn-green btn-radius new-user-btn">
              Add New User
            </CustomButton>
          </div>
          <div className="user-table">
            <table>
              <thead className="thead">
                <tr>
                  <th width="10%" scope="col">
                    No
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {isLoaded ? (
                <tbody className="tbody">
                  {isData?.map((value, idx) => {
                    return (
                      <tr key={idx}>
                        <td key={idx} scope="row">
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={idx + 1}
                            name={idx + 1}
                            onChange={HandleIsChecked}
                          />
                          {idx + 1}.
                        </td>
                        <td scope="row" className="email-col">
                          {value.firstName} {value.lastName}
                        </td>
                        <td scope="row">{value.email}</td>
                        <td scope="row">{value.role}</td>
                        <td scope="row">
                          <Link
                            to="#"
                            className="edit-icon"
                            onClick={() => {
                              setUpdateUser(true);
                              setUserData({
                                id: value.id,
                                firstName: value.firstName,
                                lastName: value.lastName,
                                email: value.email,
                                role: value.role,
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
                <DriverOperatorSkeleton />
              )}
              {isLoaded ? (
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td colSpan={1}>
                      <div className="table-paginate">
                        <ReactPaginate
                          renderOnZeroPageCount={null}
                          pageRangeDisplayed={1}
                          pageCount={3}
                          breakLabel="..."
                          activeClassName="active"
                        />
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              ) : (
                ""
              )}
            </table>
          </div>
          {isOpen && <UserComponent setIsOpen={setIsOpen} />}
          {isUpdateUser && (
            <UpdateUser setUpdateUser={setUpdateUser} userData={userData} />
          )}
        </div>
      </div>
    </div>
  );
}

const mapState = ({ user }) => ({
  isData: user.data,
  isLoaded: user.isLoaded,
});

export default connect(mapState, {
  getAllUser: getAllUser,
  deleteUser: deleteUser,
})(DriverOperator);
