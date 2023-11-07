import React, { useState } from "react";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "http://localhost:4000/a5/assignment";

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary ms-2"
      >
        Get Assignment
      </a>

      <br />

      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary ms-2"
      >
        Get Title
      </a>

      <br />

      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary ms-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />

      <br />

      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary ms-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="text"
      />

      <br />

      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary ms-2 float-end"
      >
        Update Completed
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, completed: !assignment.completed })
        }
        checked={assignment.completed}
        className="form-check-input mb-2"
        id="isCompleted"
        type="checkbox"
      />
      <label className="form-check-label ms-2" for="isCompleted">
        Completed
      </label>
    </div>
  );
}

export default WorkingWithObjects;
