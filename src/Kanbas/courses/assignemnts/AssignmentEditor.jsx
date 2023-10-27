import { useDispatch, useSelector } from "react-redux";
import { addAssignment, editAssignment, setAssignment } from "./assignmentsReducer";
import { useLocation, useNavigate } from "react-router-dom";

const AssignmentEditor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {courseId, formType} = location.state;

    const dispatch = useDispatch();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const submit = (e) => {
        e.preventDefault();

        if(formType === "ADD") {
        dispatch(addAssignment({...assignment, course: courseId}))
        }
        else {
        dispatch(editAssignment(assignment))
        }
        navigate('../assignments');
    }

    return (
    <div className="col edit-page">
        <div className="float-end">
            <i className="fa-solid fa-circle-check color-green"></i>
            <label className=" ms-1 color-green">Published</label>
        </div>

        <hr className="mt-5"/>
        

        <form className="edit-ass-form" onSubmit={(e) => {submit(e)}}>

            <label for="ass-name">Assignment Name</label>
            <input id="ass-name" type="text" className="form-control mt-1 mb-3" 
              onChange={e => dispatch(setAssignment({...assignment, title: e.target.value}))}
              value={assignment?.title} required/>

            <label for="ass-description">Assignment Description</label>
            <textarea if="ass-description" rows="5" className="form-control mt-1"
              onChange={e => dispatch(setAssignment({...assignment, description: e.target.value}))}
            >{assignment?.description}</textarea> 

            <div className="form-group row mt-3">
                <label className="col-sm-2 col-form-label ta-right">Assign</label>
                <div className="col-sm-10 sub-type-box p-3">
                    <h5>Due</h5>
                    <input className="date-picker width-100 mt-2" type="date" value="2023-10-04" required/>
                    
                    <div className="row mt-3">
                        <div className="col">
                            <h5>Available From</h5>
                            <input className="date-picker width-100 mt-2" type="date" value="2023-09-20" required/>
                        </div>
                        <div className="col">
                            <h5>Until</h5>
                            <input className="date-picker width-100 mt-2" type="date" value="2023-10-04" required/>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            <input className="form-check-input" type="checkbox" value="" id="ass-edited-notify-users-checkbox"/>
            <label className="form-check-label" for="ass-edited-notify-users-checkbox">
                Notify users that this content has changed
            </label>
            <div className="float-end mb-5">
              <button className="btn kanbas-btn-gray" type="button">Cancel</button>
              <button className="btn kanbas-red-btn ms-2" type="submit">Save</button>
            </div>
        </form>
    </div>
)}


export default AssignmentEditor