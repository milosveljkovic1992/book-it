import { db } from './firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export const getScheduleFromFirebase = async (userEmail = 'jdp@gmail.com') => {
    const scheduleRef = doc(db, `schedule`, userEmail);
    const res = await getDoc(scheduleRef);
    console.log(res.data().appointments);
    return res.data().appointments;
}
