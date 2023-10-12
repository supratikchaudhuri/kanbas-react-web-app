import { useParams } from 'react-router';
import DB from '../../Database/index.js'

const ModuleList = () => {
  const {courseId} = useParams();
  const {moduels} = DB;

  return (
    <div className="col-xs-12 col-md-8">
        <div className="button-bar">
            <button className="btn kanbas-btn-gray">Collapse All</button>
            <button className="btn kanbas-btn-gray">View Progress</button>
            <select className="form-select color-gray inline width-auto">
                <option selected>Publish All</option>
            </select>
            <button className="btn kanbas-red-btn"> + Module</button>
        </div>
        
        <hr className="mt-2 mb-2"/>

        <ul className="list-group new-module">
            <li className="list-group-item list-group-item-secondary">
                Week0- INTRO
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-plus float-end ms-3" aria-hidden="true"></i>
                <i className="fa fa-caret-down float-end ms-1" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading"> 
                Learning Objectives
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
    
            </li>
            <li className="list-group-item">
                Introduction to the Course
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Learning what is web dev
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Creating a deployment environment
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Creating a web application
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Getting started with first assignment
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading">
                Reading
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Full Stack Development Chapter-1
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Full Stack Development Chapter-2
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading">Slides
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                <a href="https://github.com/supratikchaudhuri/kanbas-react-web-app" className="link color-red">
                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                    Creating an HTTP server with node js
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </a>
            </li>
            <li className="list-group-item">
                <a href="https://github.com/supratikchaudhuri/kanbas-react-web-app" className="link color-red">
                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                    Creating a React Application
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </a>
            </li>
        </ul>

        <ul className="list-group new-module">
            <li className="list-group-item list-group-item-secondary">
                Week1- HTML
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-plus float-end ms-3" aria-hidden="true"></i>
                <i className="fa fa-caret-down float-end ms-1" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading">
                Learning Objectives
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Learning How to Create user interfaces with HTML
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Keep Working on Assignments
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Deploy the Asssignment to Netlify
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading">
                Reading
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Full Stack Development Chapter-1
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>
            <li className="list-group-item">
                Full Stack Development Chapter-2
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
            </li>

            <li className="list-group-item sub-heading">Slides
                <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>

            </li>
            <li className="list-group-item">
                <a href="https://github.com/supratikchaudhuri/kanbas-react-web-app" className="link color-red">
                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                    Creating Web Forms
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </a>
            </li>
            <li className="list-group-item">
                <a href="https://github.com/supratikchaudhuri/kanbas-react-web-app" className="link color-red">
                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                    Navigation With Anchors
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </a>
            </li>
            <li className="list-group-item">
                <a href="https://github.com/supratikchaudhuri/kanbas-react-web-app" className="link color-red">
                    <i className="fa fa-link" style={{color: "rgb(140, 138, 138)"}} aria-hidden="true"></i>
                    Embedding Contents with Iframes
                    <i className="fa fa-ellipsis-v float-end ms-4 color-gray" aria-hidden="true"></i>
                    <i className="fa fa-check-circle float-end color-green" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default ModuleList