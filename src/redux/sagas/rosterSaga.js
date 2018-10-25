// import { takeLatest, put, call } from 'redux-saga/effects';
// import { ROSTER_ACTION, setRoster } from '../Actions/rosterAction';
// import axios from 'axios';


// function* getRoster(action) {

//     try {

//         console.log(action);

//         const details = yield call(axios, {
//             method: 'GET',
//             url: `/api/username/${action.payload}`,
//         })
//         console.log(details);


//         yield put(setRoster(details.data[0]));



//     } catch (error) {
//         console.log(error);
//     }
// }
// function* fetchRoster(action) {
    
//     try {
//         const roster = yield call(axios, {
//             method: 'GET',
//             url: '/api/username',
//         })

//         yield put (setRoster(roster.data));
    
// } catch (error) {
//       console.log(error);
//     }
// }


// function* rosterPageSaga() {
//     yield takeLatest(ROSTER_ACTION.FETCH_ROSTER, fetchRoster);
// }

// export default rosterPageSaga;
