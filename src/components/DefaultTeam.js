import React from 'react'
import { useSelector } from 'react-redux'
import Student from './Student'

export default function DefaultTeam() {
    const students = useSelector(state => state.students.students)
    return (
        <div className='defaultteam'>
            <h1>Default</h1>

            {students?.map(student => (
                <Student key={student.name} student={student} />
            ))}
        </div>
    )
}
