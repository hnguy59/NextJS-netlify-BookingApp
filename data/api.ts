import firebase from "../lib/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(firebase.app());

export function getAllPlayers() {
  const getAllPlayersRef = ref(db, "/players");
  let result = [];

  try {
    onValue(getAllPlayersRef, (snapshot) => {
      snapshot.forEach((item) => {
        result[item.key] = item.val();
      });
    });
  } catch (ex) {
    console.log(ex);
  }
  return result;
}

export function getPlayer(id) {
  const getAllPlayersRef = ref(db, "/players/" + id);
  let result = [];
  try {
    onValue(getAllPlayersRef, (snapshot) => {
      snapshot.forEach((item) => {
        result[item.key] = item.val();
      });
    });
  } catch (ex) {
    console.log(ex);
  }

  return result;
}
