import "./BreadCrumb.css";
function BreadCrumb(props) {
  return (
    <>
        <div className="breadcrumb">
         <span>{props.icon} </span>&nbsp; <h6> {props.title}</h6>
        </div>
    </>
  );
}
export default BreadCrumb;
