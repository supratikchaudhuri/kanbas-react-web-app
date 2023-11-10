import SimpleAPIExamples from "./SimpleAPIExamples";

function Assignment5() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${BASE_URL}/a5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
    </div>
  );
}
export default Assignment5;
