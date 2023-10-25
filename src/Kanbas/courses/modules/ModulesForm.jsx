import React, { useState } from 'react'

const ModulesForm = ({module, setModule, courseModules, setCourseModules, hiddenForm, setHiddenForm, formType}) => {

  const addModule = () => {
    setCourseModules([...courseModules, {...module, _id: new Date().getTime()}])
    setHiddenForm(!hiddenForm)
  }

  const editModule = () => {
    setCourseModules(
      courseModules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
    setHiddenForm(!hiddenForm)
  }

  return (
    <form className='add-course-form p-4'>

      <label for="validationDefault01">Module Name</label>
      <input type="text" class="form-control mt-2 mb-3" id="validationDefault01" 
        placeholder="First name" value={module.name} required
        onChange={(e) => setModule({...module, name: e.target.value})}
      />

      <label>Module Description</label>
      <textarea rows="5" className="form-control mt-2"
        onChange={(e) => setModule({...module, description: e.target.value})}>
        {module.description}
      </textarea>
      
      {
        formType === "ADD" ?
        <button class="btn btn-primary mt-3" type="submit" onClick={addModule}>Add</button>
        : 
        <button class="btn btn-primary mt-3" type="submit" onClick={editModule}>Edit</button>
      }
      <button class="btn btn-danger mt-3 ms-3" type="submit" onClick={() => setHiddenForm(!hiddenForm)}>Cancel</button>

    </form>
  )
}

export default ModulesForm