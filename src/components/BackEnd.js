import { useSelector } from 'react-redux'
import Student from './Student'

export default function BackEnd() {
    const backEndTeam = useSelector(state => state.backEndTeam)
    return (
        <div className='binarybots'>
            <h1>BackEnd</h1>
            {backEndTeam.map(teammember => {
                return <Student student={teammember} />
            })}
        </div>
    )
}
