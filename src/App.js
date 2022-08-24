import './App.css'
import MainContainer from './components/MainContainer'

import { useDispatch } from 'react-redux'
import AddStudent from './components/AddStudent'

function App() {
    const dispatch = useDispatch()
    return (
        <div className='topcontainer'>
            <h1>Student Team React Challenge</h1>
            <AddStudent />
            <button
                className='button-24'
                onClick={() => dispatch({ type: 'RESET_STUDENTS' })}
            >
                Reset
            </button>
            <div className='App'>
                <MainContainer />
            </div>
        </div>
    )
}

export default App
