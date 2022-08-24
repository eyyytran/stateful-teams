import { useSelector } from 'react-redux'
import Student from './Student'

export default function BackEnd() {
    const backEndTeam = useSelector(state => state.students.backEndTeam)
    return (
        <div className='binarybots'>
            <h1>BackEnd</h1>
            {backEndTeam.map(teammember => {
                return <Student key={teammember.name} student={teammember} />
            })}
        </div>
    )
}
