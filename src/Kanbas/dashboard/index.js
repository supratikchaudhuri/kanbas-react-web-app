import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

import { useState } from 'react';
import AddCourseForm from './CourseForm';
import { Link } from 'react-router-dom';

function Dashboard({courses, setCourses}) {
	const defaultCourse = {
		name: "New Course",      number: "NN 101",
		startDate: "2023-09-10", endDate: "2023-12-15",
		description: "New Description"
	}
    const [course, setCourse] = useState(defaultCourse)
    const [hiddenForm, setHiddenForm] = useState(true)
    const [formType, setFormType] = useState(null)

    const displayForm = (e, type) => {
        e.preventDefault()
        setFormType(type)
        setHiddenForm(!hiddenForm)
    }

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    return (
        <>
        <div class="col-sm-12 dashboard">
            {
                !hiddenForm
                &&
                <div className='center-align'>
                    <AddCourseForm
                        formType={formType}
                        courses={courses}
                        setCourses={setCourses}	
                        course={course}
                        setCourse={setCourse}
                        hiddenForm={hiddenForm}
                        setHiddenForm={setHiddenForm}
                    />
                </div>
            }
        <h1 className="heading">Dashboard</h1>
        <hr/>

        <div className="random-div d-flex flex-row"> 
            <h2 className="sub-heading mb-0 mt-0">Published Courses ({courses.length})</h2>
                <button className="btn btn-primary ms-auto" onClick={e => {setCourse(defaultCourse); displayForm(e, "ADD")}}>Add</button>
        </div>
        
        <hr/>

        <div className="d-flex justify-content-start flex-wrap card-container">
            {
                courses.map((course) => {
                    return (
                        <Link to={`/kanbas/courses/${course._id}`}>
                            <div className="card course-card pointer" 
                            // onClick={redirect(course._id)}
                            >
                                <img className="card-img-top" src={course.image ? require(`../../images/${course.image}`) :  require("../../images/blue.png")} alt="course-card-img"/>
                                <div className="m-2 pointer mb-auto">
                                    <h5 className="card-title truncate-text">{`${course._id}: ${course.name}`}</h5>
                                    <p className="card-text truncate-text">{course.description}</p>
                                    
                                </div>
                                <div className="d-flex flex-wrap pointer justify-content-start">
                                    <i className="fa fa-bullhorn footer-item" aria-hidden="true"></i>
                                    <i className="fa-solid fa-clipboard footer-item"></i>
                                    
                                    <i className="fa-solid fa-edit footer-item color-green ms-auto"
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            setCourse(course);
                                            displayForm(e, "EDIT");
                                        }}
                                    ></i>
                                    <i className="fa-solid fa-trash footer-item color-red"
                                        onClick={(e) => {e.preventDefault(); deleteCourse(course._id)}}
                                    ></i>
                                </div>
                        </div>
                    </Link>
                )})
            }
        </div>
        </div>

        </>
    )
}

export default Dashboard