import SkeletonElement from "../../skeletons/SkeletonElement";
function LoginSkeleton() {
  return (
    <>
      <div className="skeleton-container">
        <div className="login-skeleton">
          <div className="skeleton-one">
            <SkeletonElement type="text" height={430} width={330} />
          </div>
          <div className="skeleton-inputs">
            <SkeletonElement type="text" height={40} width={40} />
            <SkeletonElement type="text" height={20} width={220} />
            <SkeletonElement type="text" height={20} width={220} />
            <SkeletonElement type="text" height={20} width={220} />
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginSkeleton;
