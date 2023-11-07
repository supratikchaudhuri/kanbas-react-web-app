import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  editAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { useLocation, useNavigate } from "react-router-dom";
import * as client from "./client";

const AssignmentEditor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId, formType } = location.state;

  const dispatch = useDispatch();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const submit = async (e) => {
    e.preventDefault();

    if (formType === "ADD") {
      const newAssignment = await client.createAssignment(courseId, assignment);
      console.log(newAssignment);
      dispatch(addAssignment({ ...newAssignment, course: courseId }));
    } else {
      const updatedAssignment = await client.updateAssignment(assignment);
      dispatch(editAssignment(updatedAssignment));
    }
    navigate("../assignments");
  };

  return (
    <div className="col edit-page">
      <div className="float-end">
        <i className="fa-solid fa-circle-check color-green"></i>
        <label className=" ms-1 color-green">Published</label>
      </div>

      <hr className="mt-5" />

      <form
        className="edit-ass-form"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <label for="ass-name">Assignment Name</label>
        <input
          id="ass-name"
          type="text"
          className="form-control mt-1 mb-3"
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
          value={assignment.title}
          required
        />

        <label for="ass-description">Assignment Description</label>
        <textarea
          if="ass-description"
          rows="4"
          className="form-control mt-1"
          onChange={(e) =>
            dispatch(
              setAssignment({ ...assignment, description: e.target.value })
            )
          }
        >
          {assignment.description}
        </textarea>

        <div className="form-group row mt-3">
          <div className="form-group row mb-3">
            <label for="points" className="col-sm-2 col-form-label ta-right ">
              Points
            </label>
            <div className="col-sm-10 width-50">
              <input
                id="points"
                type="number"
                readonly
                className="form-control"
                value={assignment.points}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </div>
          </div>

          <label className="col-sm-2 col-form-label ta-right">Assign</label>
          <div className="col-sm-10 sub-type-box p-3">
            <h5>Due</h5>
            <input
              className="date-picker width-100 mt-2"
              type="date"
              value={assignment.dueDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, dueDate: e.target.value })
                )
              }
              required
            />

            <div className="row mt-3">
              <div className="col">
                <h5>Available From</h5>
                <input
                  className="date-picker width-100 mt-2"
                  type="date"
                  value={assignment.availableFromDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableFromDate: e.target.value,
                      })
                    )
                  }
                  required
                />
              </div>
              <div className="col">
                <h5>Until</h5>
                <input
                  className="date-picker width-100 mt-2"
                  type="date"
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableUntilDate: e.target.value,
                      })
                    )
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="ass-edited-notify-users-checkbox"
        />
        <label
          className="form-check-label"
          for="ass-edited-notify-users-checkbox"
        >
          Notify users that this content has changed
        </label>
        <div className="float-end mb-5">
          <button
            className="btn kanbas-btn-gray"
            type="button"
            onClick={(e) => {
              navigate("../assignments");
            }}
          >
            Cancel
          </button>
          <button className="btn kanbas-red-btn ms-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentEditor;
