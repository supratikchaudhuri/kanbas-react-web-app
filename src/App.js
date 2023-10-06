import './App.css';
import Kanbas from './Kanbas';

import Labs from './labs/Labs';
import HelloWorld from './labs/a3/HelloWorld';

function App() {
  return (
    <div className='container'>
      <HelloWorld/>
      <Labs/>
      <Kanbas/>
    </div>
  );
}

export default App;
