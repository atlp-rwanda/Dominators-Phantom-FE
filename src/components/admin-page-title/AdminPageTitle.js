import "./AdminPageTitle.css";
function AdminPageTitle(props) {
  return (
    <>
        <div className="admin-page-title">
         <span><img src={props.icon}/> </span>&nbsp; <h6> {props.title}</h6>
        </div>
    </>
  );
}
export default AdminPageTitle;
