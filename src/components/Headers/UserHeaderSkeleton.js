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
            <SkeletonElement type="title" height={20} width={120} />
          </div>
          <div className="skeleton-bus">
            <SkeletonElement type="thumbnail" height={300} width={300} />
          </div>
        </div>
      </div>
    </>
  );
}
export default UserHeaderSkeleton;
