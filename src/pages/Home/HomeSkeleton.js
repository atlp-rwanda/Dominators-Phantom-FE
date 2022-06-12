import SkeletonElement from "../../skeletons/SkeletonElement";
function HomeSkeleton() {
  return (
    <>
      <div className="home-skeleton">
        <div className="home-skeleton-content">
          <div className="header-skeleton">
            <SkeletonElement type="text" height={20} width={200} />
          </div>
          <div className="row">
            <SkeletonElement type="text" height={270} width={270} />

            <SkeletonElement height={270} width={200} />

            <SkeletonElement height={270} width={200} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeSkeleton;
