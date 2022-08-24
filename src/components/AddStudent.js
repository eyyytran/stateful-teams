import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddStudent = () => {
    const [studentName, setStudentName] = useState('')
    const [studentImg, setStudentImg] = useState('')
    const dispatch = useDispatch()
    const handleClick = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_STUDENT',
            payload: { name: studentName, img: studentImg },
        })
        setStudentName('')
        setStudentImg('')
    }
    return (
        <form>
            <input
                type='text'
                name='student-name'
                placeholder='Enter Name'
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
            />
            <input
                type='text'
                name='student-img'
                placeholder='Image URL'
                value={studentImg}
                onChange={e => setStudentImg(e.target.value)}
            />
            <button className='button-24' type='submit' onClick={handleClick}>
                +
            </button>
        </form>
    )
}

export default AddStudent
