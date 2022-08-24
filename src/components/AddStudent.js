import React from 'react'

const AddStudent = () => {
    return (
        <form>
            <input type='text' name='student-name' placeholder='Enter Name' />
            <input type='text' name='student-img' placeholder='Image URL' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddStudent
