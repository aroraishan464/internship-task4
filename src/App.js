import './App.css';
import PerformanceContainer from './components/PerformanceContainer';
import StudentInfoContainer from "./components/StudentInfoContainer";
import ActivityContainer from "./components/ActivityContainer"

function App() {
  return (
      <div className="App">
        <StudentInfoContainer />
        <PerformanceContainer />
        <ActivityContainer />
      </div>
  );
}

export default App;
