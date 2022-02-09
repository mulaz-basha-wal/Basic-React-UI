import './App.css';
import Comment from './Comment';
import Forum from './Forum';
import Ecommerce from './Ecommerce';

function App() {
  return (
    <div className="App">
      {/* use only one component at a time.
      if you use all components at a time all components will conflict
      <Comment/>
      <Forum topic="What is Mulaz Basha ?"/> */}
      <Ecommerce/>
    </div>
  );
}

export default App;