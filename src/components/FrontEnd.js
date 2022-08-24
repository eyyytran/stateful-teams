import { useSelector } from 'react-redux'
import Student from './Student'

export default function FrontEnd() {
    const frontEndTeam = useSelector(state => state.students.frontEndTeam)
    return (
        <div className='bc-crew'>
            <h1>FrontEnd</h1>
            {frontEndTeam.map(teammember => {
                return <Student key={teammember.name} student={teammember} />
            })}
        </div>
    )
}
