import SkeletonElement from "../../skeletons/skeletonElement";
function DriverOperatorSkeleton() {
  const rows = [1, 2, 3, 4, 5];
  return (
    <tbody className="">
      {rows.map((value, idx) => {
        return (
          <tr key={idx}>
            <td>
              <SkeletonElement type="title" width={20} height={9} />
            </td>
            <td>
              <SkeletonElement type="title" width={120} height={9} />
            </td>
            <td>
              <SkeletonElement type="title" width={120} height={9} />
            </td>
            <td>
              <SkeletonElement type="title" width={120} height={9} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
export default DriverOperatorSkeleton;
