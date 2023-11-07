import EncodingParametersInURLs from "./EncodingParamsInURL";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjets";

function Assignment5() {
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <div className="list-group mb-5">
        <a href="http://localhost:4000/a5/welcome" className="list-group-item">
          Welcome
        </a>
      </div>

      {/* 3.1 */}
      <div className="mb-5">
        <EncodingParametersInURLs />
      </div>

      {/* 3.2 */}
      <div className="mb-5">
        <WorkingWithObjects />
      </div>

      {/* 3.3  incomplete */}
      <div className="mb-5">
        <WorkingWithArrays />
      </div>

      {/* 3.4 */}
    </div>
  );
}
export default Assignment5;
