import firebase from '../firebase/config';

const db = firebase.database().ref("/scans");


class ScansDataService {

    getAll() {
        return db;
    }

    newScan(scan) {
        return db.push(scan);
    }

    get(id) {
        return db.child(id);
    }

}

export default new ScansDataService();
