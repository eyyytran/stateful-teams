import { useDispatch, useSelector } from 'react-redux'
export default function Student({ student }) {
    const dispatch = useDispatch()
    const frontEndTeam = useSelector(state => state.frontEndTeam)
    const backEndTeam = useSelector(state => state.backEndTeam)
    const isFEBtnDisabled = Boolean(
        frontEndTeam.find(teammember => teammember.name === student.name)
    )
    const isBEBtnDisabled = Boolean(
        backEndTeam.find(teammember => teammember.name === student.name)
    )
    return (
        <div className='studentCard'>
            <h3>{student.name}</h3>
            <img className='student-pic' src={student.img} alt='' />
            <div>
                <button
                    className='button-24'
                    id='frontend'
                    onClick={() => {
                        dispatch({ type: 'TO_FRONTEND', payload: student })
                    }}
                    disabled={isFEBtnDisabled}
                >
                    Front Enders 4 Lyfe
                </button>
                <button
                    className='button-24'
                    id='backend'
                    disabled={isBEBtnDisabled}
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
