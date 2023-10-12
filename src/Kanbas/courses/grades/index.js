import { useParams } from "react-router"
import DB from "../../Database"
import "./styles.css"

const Grades = () => {
  const { courseId } = useParams();
  const { grades } = DB.grades;

  return (
    <div className="col width-auto">
        <div className="float-end">
            <button className="btn kanbas-btn-gray"><i className="fa-solid fa-file-import"></i> Import</button>
            <button className="btn kanbas-btn-gray ms-2"><i className="fa-solid fa-file-export"></i> Export</button>
            <button className="btn kanbas-btn-gray ms-2"><i className="fa-solid fa-gear color-black"></i></button>
        </div>
        
        
        <hr className="mt-5"/>

        <form>
            <div className="row center-align">
                <div className="col fw-600">
                    Student Names
                </div>
                <div className="col fw-600">
                    Assignment Names
                </div>
            </div>

            <div className="row center-align mt-1">
                <div className="col">
                    
                    <div className="dropdown">
                        <select id="ass-grp" className="form-select color-gray">
                            <option selected>
                                🔍  Search Students
                            </option>
                        </select>
                        {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href=".">Action</a>
                            <a className="dropdown-item" href=".">Another action</a>
                            <a className="dropdown-item" href=".">Something else here</a>
                        </div> */}
                    </div>
                </div>
                <div className="col">
                    <div className="dropdown">
                        <select id="ass-grp" className="form-select color-gray">
                            <option selected value="fa-magnifying-glass">
                                🔍  Search Assignments
                            </option>
                        </select>
                        {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href=".">Action</a>
                            <a className="dropdown-item" href=".">Another action</a>
                            <a className="dropdown-item" href=".">Something else here</a>
                        </div> */}
                        </div>
                </div>
            </div>

            
            <button className="btn kanbas-btn-gray mt-2"><i className="fa fa-filter" aria-hidden="true"></i> Filter</button>
        </form>

        <table className="mt-3 grades-table -2">
            <thead>
                <tr>
                    <th className="student-name fw-600">Student Name</th>
                    <th>A1 Setup <br/>Out of 100</th>
                    <th>A2 HTML <br/>Out of 100</th>
                    <th>A3 CSS <br/>Out of 100</th>
                    <th>A4 Bootstrap <br/>Out of 100</th>
                </tr>
            </thead>
        
            
            <tr >
                <td valign="top" className="student-name color-red">Alice Wolderland</td>
                <td valign="top">98</td>
                <td valign="top"><input type="number" className="form-control tl-center" value="89"/></td>
                <td valign="top">100</td>
                <td valign="top">95</td>
            </tr>

            <tr >
                <td valign="top" className="student-name color-red">John Doe</td>
                <td valign="top">100</td>
                <td valign="top">97</td>
                <td valign="top">100</td>
                <td valign="top"><input type="number" className="form-control tl-center" value="97"/></td>
            </tr>

            <tr >
                <td valign="top" className="student-name color-red">Sam Wilson</td>
                <td valign="top"><input type="number" className="form-control tl-center" value="98"/></td>
                <td valign="top">100</td>
                <td valign="top">100</td>
                <td valign="top">99</td>
            </tr>

            <tr>
                <td valign="top" className="student-name color-red">Thomas D</td>
                <td valign="top">89</td>
                <td valign="top"><input type="number" className="form-control tl-center" value="99"/></td>
                <td valign="top">92</td>
                <td valign="top">93</td>
            </tr>
        </table>

    </div>
  )
}

export default Grades