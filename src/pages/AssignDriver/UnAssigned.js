import Header from "../../components/admin-header/Header";
import Sidebar from "../../components/admin-sidebar/SideBar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CustomButton from "../../components/Buttons/CustomeButton";
import { MdAssignment } from "react-icons/md";
import { connect } from "react-redux";
import AssignedSkeleton from "./AssignedSkeleton";

function UnAssigned(props) {
  const { IsLoaded } = props;
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <BreadCrumb icon={<MdAssignment />} title="LIST OF UN-ASSIGNED" />
        <div className="content">
          <div className="btn-add-route">
            <CustomButton classes="btn btn-green btn-radius">
              UnAssigned Driver
            </CustomButton>
          </div>
          <div className="route-table">
            <table>
              <thead className="thead">
                <tr>
                  <th>No</th>
                  <th>Driver Name</th>
                  <th>Driver Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {IsLoaded ? "" : <AssignedSkeleton />}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
const mapState = ({ assigned }) => ({
  IsLoaded: assigned.IsLoaded,
});
export default connect(mapState, {})(UnAssigned);
