import './App.css'
import MainContainer from './components/MainContainer'

import { useSelector, useDispatch } from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const students = useSelector(state => state.students)
    return (
        <div className='topcontainer'>
            <h1>Student Team React Challenge</h1>
            <button
                className='button-24'
                onClick={() => dispatch({ type: 'RESET_STUDENTS' })}
            >
                Reset
            </button>
            <div className='App'>
                <MainContainer students={students} />
            </div>
        </div>
    )
}

export default App
