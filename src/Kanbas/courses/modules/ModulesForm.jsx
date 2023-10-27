import React from 'react'
import { addModule, setModule, editModule } from './ModulesReducer';
import { useDispatch, useSelector } from 'react-redux';

const ModulesForm = ({courseId, hiddenForm, setHiddenForm, formType}) => {
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modulesReducer.module);

  const submitFn = (e) => {
    e.preventDefault();

    if(formType === "ADD") {
      dispatch(addModule({...module, course: courseId}))
    }
    else {
      dispatch(editModule(module))
    }
    setHiddenForm(!hiddenForm)
  }

  return (
    <form className='add-course-form p-4' onSubmit={(e) => submitFn(e)}>

      <label for="validationDefault01">Module Name</label>
      <input type="text" class="form-control mt-2 mb-3" id="validationDefault01" 
        placeholder="Module Name" value={module.name} required
        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
      />

      <label>Module Description</label>
      <textarea rows="5" className="form-control mt-2" placeholder='Module Description' required
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}>
        {module.description}
      </textarea>
      
      {
        formType === "ADD" ?
        <button class="btn btn-primary mt-3" type="submit">Add</button>
        : 
        <button class="btn btn-primary mt-3" type="submit">Edit</button>
      }
      <button class="btn btn-danger mt-3 ms-3" type="button" onClick={() => setHiddenForm(!hiddenForm)}>Cancel</button>

    </form>
  )
}

export default ModulesForm