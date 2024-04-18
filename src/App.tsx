import './App.css'
import NumberDisplay from './components/number-display/NumberDisplay';
import TriangleArea from './components/triangle-area/TriangleArea';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <h4>Technical Assignment</h4>          
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <TriangleArea />
        </div>
        <div className="col-6">
          <NumberDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
