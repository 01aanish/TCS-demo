import './App.css';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    { id: '2590874', name: 'Aanish Sharma', unit: 'ESU', project: 'CIGNA' },
    { id: '2590834', name: 'Nitish Gupta', unit: 'ESU', project: 'CIGNA' },
    { id: '3290871', name: 'Nandini', unit: 'Lifescience', project: 'Lilly' },
    { id: '2133874', name: 'Tithi', unit: 'AI Cloud', project: 'Healthcare' }
  ]);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    unit: '',
    project: ''
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = formData;
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, formData]);
    }

    setFormData({ id: '', name: '', unit: '', project: '' });
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredEmployees = employees.filter((_, i) => i !== index);
    setEmployees(filteredEmployees);
  };

  return (
    <div>
      <h2>Demo Project</h2>
      <div id='inputDiv'>
        <input
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          placeholder='EID'
        /><br />
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Name'
        /><br />
        <input
          name="unit"
          value={formData.unit}
          onChange={handleInputChange}
          placeholder='Unit'
        /><br />
        <input
          name="project"
          value={formData.project}
          onChange={handleInputChange}
          placeholder='Project'
        /><br />
        <button onClick={handleSubmit}>
          {editIndex !== null ? 'Update Employee' : 'Add Employee'}
        </button>
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
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.unit}</td>
                <td>{employee.project}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
