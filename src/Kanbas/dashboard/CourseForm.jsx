import axios from "axios";
import React from "react";

const AddCourseForm = ({
  formType,
  courses,
  setCourses,
  course,
  setCourse,
  hiddenForm,
  setHiddenForm,
}) => {
  const addCourse = async (e) => {
    const res = await axios.post("http://localhost:4000/api/courses", course);

    e.preventDefault();
    setCourses([...res.data, ...courses]);
    setHiddenForm(!hiddenForm);
  };

  const editCourse = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:4000/api/courses/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return res.data;
        } else {
          return c;
        }
      })
    );

    setHiddenForm(!hiddenForm);
  };

  return (
    <>
      <form className="add-course-form">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">Course Name</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              placeholder="First name"
              value={course.name}
              required
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault02">Course Number</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault02"
              placeholder="Last name"
              value={course.number}
              required
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
        </div>

        <label for="course-description">Course Description</label>
        <textarea
          id="course-description"
          rows="5"
          className="form-control mb-3"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        >
          {course.description}
        </textarea>

        <div className="row mb-3">
          <div className="col">
            <label>Start Date</label>
            <input
              className="date-picker width-100"
              type="date"
              value={course.startDate}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </div>
          <div className="col">
            <label>End Date</label>
            <input
              className="date-picker width-100"
              type="date"
              value={course.endDate}
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
        </div>

        {formType === "EDIT" ? (
          <button class="btn btn-primary" type="submit" onClick={editCourse}>
            Edit Course
          </button>
        ) : (
          <button class="btn btn-primary" type="submit" onClick={addCourse}>
            Add Course
          </button>
        )}

        <button
          class="btn btn-danger ms-3"
          type="submit"
          onClick={() => setHiddenForm(!hiddenForm)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default AddCourseForm;
