import List from './assets/Posts'
import Add from './assets/Posts/Add'

function App() {
  
  return (
    <>
      <div className='container'>
        <h1>Blog App</h1>
        <Add />
        <hr />
        <h2>Posts</h2>
        <div>
          <List />
        </div>
      </div>
    </>
  )
}

export default App
