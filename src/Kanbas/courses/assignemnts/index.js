import React from "react";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import AssignmentEditor from "./AssignmentEditor";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  return (
    <div class="col width-100">
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Search For Assignments"
          />
        </div>
        <div class="col">
          <div class="float-end">
            <button class="btn kanbas-btn-gray">+ Group</button>
            <Link
              to="create-assignment"
              state={{ courseId, formType: "ADD" }}
              element={<AssignmentEditor />}
            >
              <button class="btn kanbas-red-btn mt-1 ms-2">+ Assignment</button>
            </Link>
          </div>
        </div>
      </div>

      <hr class="mt-3" />

      {assignments.filter((assignment) => assignment.course === courseId)
        .length === 0 ? (
        <div className="col width-100 alert alert-danger" role="alert">
          No assignments created
        </div>
      ) : (
        <ul class="list-group assignments">
          <li class="list-group-item list-group-item-secondary">
            Assignments
            <i
              class="fa fa-ellipsis-v float-end ms-4 color-gray"
              aria-hidden="true"
            ></i>
            <i class="fa fa-plus float-end ms-3" aria-hidden="true"></i>
            <label class="custom-label float-end">40% of Total</label>
          </li>

          {assignments
            .filter((assignment) => assignment.course === courseId)
            .map((assignment) => {
              return (
                <li class="list-group-item sub-heading">
                  <div class="d-flex ass-box align-items-center">
                    <i class="fa-solid fa-grip-vertical color-gray"></i>
                    <i class="fa-regular fa-pen-to-square color-gray ms-3"></i>
                    <div class="ass-description ms-3">
                      <Link
                        to={assignment._id}
                        state={{ courseId, formType: "EDIT" }}
                        element={<AssignmentEditor />}
                        onClick={() => dispatch(setAssignment(assignment))}
                      >
                        {assignment.title}
                      </Link>
                      <p>
                        <strong>Due</strong>{" "}
                        {(() => {
                          const dueDate = new Date(assignment.dueDate);
                          dueDate.setDate(dueDate.getDate() + 1);
                          const options = { month: "short", day: "numeric" };
                          const formattedDate = new Intl.DateTimeFormat(
                            "en-US",
                            options
                          ).format(dueDate);
                          return formattedDate;
                        })()}{" "}
                        at 11:59pm | -/{assignment.points} pts
                      </p>
                    </div>

                    <div className="d-flex align-items-center ms-auto">
                      <i
                        class="fa fa-check-circle color-green"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-solid fa-trash footer-item color-red ms-4"
                        onClick={(e) => {
                          var ans = window.confirm(
                            "Are you sure you want to delete this assignment?"
                          );
                          if (ans) {
                            dispatch(deleteAssignment(assignment._id));
                          }
                        }}
                      ></i>
                      <i
                        class="fa fa-ellipsis-v float-end ms-4  color-gray"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default Assignments;
