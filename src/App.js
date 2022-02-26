import { useSelector } from 'react-redux'

import Title from './components/Title'
import Input from './components/Input'
import TodoList from './components/Todo/TodoList'

function App() {
  return (
    <div className="App">
      <Title>
        <h1>Getir TodoList</h1>
      </Title>
      <Input />
      <TodoList />
    </div>
  )
}

export default App
