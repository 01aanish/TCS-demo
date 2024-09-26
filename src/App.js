import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h2>Demo Project</h2>
      <div id='inputDiv'>
        <input placeholder='EID'/><br/>
        <input placeholder='Name'/><br/>
        <input placeholder='Unit'/><br/>
        <input placeholder='Project'/>
      </div>
      <div id='mainDiv'>
        <table id='newTable'>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Unit</th>
              <th>Project</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>2590874</td>
              <td>Aanish Sharma</td>
              <td>ESU</td>
              <td>CIGNA</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2590834</td>
              <td>Nitish Gupta</td>
              <td>ESU</td>
              <td>CIGNA</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>3290871</td>
              <td>Nandini</td>
              <td>Lifescience</td>
              <td>Lilly</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2133874</td>
              <td>Tithi</td>
              <td>AI Cloud</td>
              <td>Healthcare</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default App;
