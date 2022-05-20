import {db} from './firebas.js';
export const firebaseOptions = {
    add(obj){
        //db.collection("count-App").add(obj);

        //db.collection("count-App").update(obj);
        console.log("added........",db.collection("count-App"));
    }
}