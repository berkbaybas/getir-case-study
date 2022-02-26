import { useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import TodoList from './components/Todo/TodoList'
import Alert from './components/Alert'

function App() {
  const [isAlertActive, setIsAlertActive] = useState(false)

  return (
    <div className="App">
      <Alert
        isAlertActive={isAlertActive}
        setIsAlertActive={setIsAlertActive}
      />
      <Title>
        <h1>Getir TodoList</h1>
      </Title>
      <Input setIsAlertActive={setIsAlertActive} />
      <TodoList />
    </div>
  )
}

export default App
