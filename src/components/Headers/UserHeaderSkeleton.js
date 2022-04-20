import SkeletonElement from "../../skeletons/SkeletonElement";
function UserHeaderSkeleton() {
  return (
    <>
      <div className="skeleton-wrapper">
        <div className="skeleton-userheader">
          <div className="skeleton-descr">
            <SkeletonElement type="title" height={20} width={200} />
            <SkeletonElement type="title" height={50} width={120} />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="title" />
          </div>

          <SkeletonElement type="thumbnail" />
        </div>
      </div>
    </>
  );
}
export default UserHeaderSkeleton;
