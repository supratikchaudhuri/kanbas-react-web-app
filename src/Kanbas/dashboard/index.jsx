import "../index.css"
import "./styles.css"

import data from '../Database/index.js'

function Dashboard() {
    const {courses} = data;
    console.log(courses);

  const redirect = (courseId) => {
    return () => {
      window.location.href = `courses/${courseId}`
    }
  }

  return (
    <div className="main">
        <div className="col-sm-12 dashboard">
            <h1 className="heading">Dashboard</h1>
            <hr/>

            <div className="random-div"> 
                <h2 className="sub-heading mb-3">Published Courses (10)</h2>
                <hr/>
            </div>
            <div className="d-flex justify-content-start flex-wrap card-container">

                {
                    courses.map((course, index) => {
                       return (
                        <div className="card course-card pointer" onClick={redirect(course._id)}>
                            <img className="card-img-top" src={course.image ? `../images/${course.image}` :  "../images/blue.png"} alt="course-card-img"/>
                            <div className="m-2 pointer mb-auto">
                                <h5 className="card-title truncate-text">{`${course._id}: ${course.name}`}</h5>
                                <p className="card-text truncate-text">{course.description}</p>
                                
                            </div>
                            <div className="d-flex flex-wrap pointer justify-content-start">
                                <i className="fa fa-bullhorn footer-item" aria-hidden="true"></i>
                                <i className="fa-solid fa-clipboard footer-item"></i>
                            </div>
                        </div>
                       )
                    })
                }


                <div className="card course-card">
                    <img className="card-img-top pointer" src="../images/blue.png" alt="Card cap"/>
                    <div className="m-2 pointer mb-auto">
                        <h5 className="card-title truncate-text">CS5610: Web Development</h5>
                        <p className="card-text truncate-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sed.</p>
                        
                    </div>
                    <div className="d-flex flex-wrap pointer justify-content-start">
                        <i className="fa fa-bullhorn footer-item" aria-hidden="true"></i>
                        <i className="fa-solid fa-clipboard footer-item"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard