import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const URL = `${BASE_URL}/a5/assignment`;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary ms-2 float-end"
      >
        Update Title
      </a>
      <div>
        <label>Assignment Title</label>
        <input
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          value={assignment.title}
          className="form-control mb-2 w-75"
          type="text"
        />
      </div>

      <button onClick={updateTitle} className="btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="btn btn-danger mb-2 ms-2">
        Fetch Assignment
      </button>

      <div>
        <a
          href={`${URL}/score/${assignment.score}`}
          className="btn btn-primary me-2 float-end"
        >
          Update Score
        </a>
        <div>
          <label>Assignment Score</label>
          <input
            onChange={(e) =>
              setAssignment({ ...assignment, score: e.target.value })
            }
            value={assignment.score}
            className="form-control mb-2 w-75"
            type="number"
          />
        </div>
      </div>

      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>

      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            completed: e.target.checked,
          })
        }
        checked={assignment.completed}
        className="form-check-input mb-2"
        type="checkbox"
        id="isCompleted"
      />
      <label className="form-check-label" for="isCompleted">
        Completed
      </label>

      <h3>Retrieving Objects</h3>
      <a
        href={`${BASE_URL}/a5/assignment`}
        className="btn btn-primary me-2 w-25"
      >
        Get Assignment
      </a>
      <h3>Retrieving Properties</h3>
      <a
        href={`${BASE_URL}/a5/assignment/title`}
        className="btn btn-primary me-2 w-25"
      >
        Get Title
      </a>
    </div>
  );
}

export default WorkingWithObjects;
