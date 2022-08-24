import West from '../assets/westithink.png'
import jason from '../assets/jason.png'
import ramen from '../assets/ramen.png'
import olivia from '../assets/olivia.png'
import andrea from '../assets/andrea.png'
import ethan from '../assets/ethan.png'
import amanda from '../assets/amanda.png'
import coolstacy from '../assets/coolstacy.png'
import blake from '../assets/blake.png'
import carlos from '../assets/carlos.png'

const initialState = {
    students: [
        { name: 'West', img: West },
        { name: 'Rahmin', img: ramen },
        { name: 'Olivia', img: olivia },
        { name: 'Jason', img: jason },
        { name: 'Ethan', img: ethan },
        { name: 'Amanda', img: amanda },
        { name: 'Andrea', img: andrea },
        { name: 'Stacy', img: coolstacy },
        { name: 'Carlos', img: carlos },
        { name: 'Blake', img: blake },
    ],
    frontEndTeam: [],
    backEndTeam: [],
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            initialState.students.splice(0, 0, action.payload)
            return {
                ...state,
                students: [...initialState.students],
            }
        case 'RESET_STUDENTS':
            return {
                students: initialState.students,
                frontEndTeam: initialState.frontEndTeam,
                backEndTeam: initialState.backEndTeam,
            }
        case 'TO_FRONTEND':
            return {
                backEndTeam: state.backEndTeam.filter(
                    student => student.name !== action.payload.name
                ),
                frontEndTeam: [...state.frontEndTeam, action.payload],
                students: state.students.filter(
                    student => student.name !== action.payload.name
                ),
            }
        case 'TO_BACKEND':
            return {
                students: state.students.filter(
                    student => student.name !== action.payload.name
                ),
                frontEndTeam: state.frontEndTeam.filter(
                    student => student.name !== action.payload.name
                ),
                backEndTeam: [...state.backEndTeam, action.payload],
            }
        default:
            return state
    }
}

export default studentReducer
