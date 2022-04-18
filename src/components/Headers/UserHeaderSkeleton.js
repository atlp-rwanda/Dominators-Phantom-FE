import SkeletonElement from "../../skeletons/skeletonElement";
function UserHeaderSkeleton() {
  return (
    <>
      <div className="skeleton-wrapper">
        <div className="skeleton-userheader">
                  <div>
                  <SkeletonElement type="title"/>
                  <SkeletonElement type="text"/>
                  <SkeletonElement type="text"/>
                  <SkeletonElement type="text"/>
                  <SkeletonElement  type="title"/>
                  </div>
                  
                  <SkeletonElement type="thumbnail"/>
                  
        </div>
      </div>
    </>
  );
}
export default UserHeaderSkeleton;
