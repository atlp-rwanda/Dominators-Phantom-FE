import "./Skeleton.css";
const SkeletonElement = ({ type, height, width }) => {
  const classes = `skeleton ${type}`;
  return (
    <div
      className={classes}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  );
};
export default SkeletonElement;
