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

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_STUDENTS':
            console.log(initialState.students)
            return {
                students: initialState.students,
                frontEndTeam: initialState.frontEndTeam,
                backEndTeam: initialState.backEndTeam,
            }
        case 'TO_FRONTEND':
            state.students = state.students.filter(
                student => student.name !== action.payload.name
            )
            state.backEndTeam = state.backEndTeam.filter(
                student => student.name !== action.payload.name
            )
            console.log(initialState.students)
            return {
                ...state,
                frontEndTeam: [...state.frontEndTeam, action.payload],
                students: state.students,
            }
        case 'TO_BACKEND':
            state.students = state.students.filter(
                student => student.name !== action.payload.name
            )
            state.frontEndTeam = state.frontEndTeam.filter(
                student => student.name !== action.payload.name
            )
            console.log(initialState.students)
            return {
                students: state.students,
                frontEndTeam: state.frontEndTeam,
                backEndTeam: [...state.backEndTeam, action.payload],
            }
        default:
            return state
    }
}
export default rootReducer
