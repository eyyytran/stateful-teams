import { useDispatch } from 'react-redux'
export default function Student({ student }) {
    const dispatch = useDispatch()
    return (
        <div className='studentCard'>
            <h3>{student.name}</h3>
            <img className='student-pic' src={student.img} alt='' />
            <div>
                <button
                    className='button-24'
                    onClick={() =>
                        dispatch({ type: 'TO_FRONTEND', payload: student })
                    }
                >
                    Front Enders 4 Lyfe
                </button>
                <button
                    className='button-24'
                    onClick={() =>
                        dispatch({ type: 'TO_BACKEND', payload: student })
                    }
                >
                    In the Backend, it totally matters
                </button>
            </div>
        </div>
    )
}
