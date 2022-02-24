import { useSelector } from 'react-redux'

import Input from './components/Input'

function App() {
  const todo = useSelector((state) => state.todo)
  console.log(todo)
  return (
    <div className="App">
      <h1>Getir TodoList</h1>
      <Input />
      {/* List */}
    </div>
  )
}

export default App
