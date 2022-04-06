import firebase from "../lib/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(firebase.app());

export function getAllPlayers() {
  let result;
  const getAllPlayersRef = ref(db, "/players");
  try {
    onValue(getAllPlayersRef, (snapshot) => {
      const data = snapshot.val();
      result = data;
    });
  } catch (ex) {
    console.log(ex);
  }
  return result;
}

export function getPlayer(id) {
  let result;
  const getAllPlayersRef = ref(db, "/players/" + id);
  try {
    onValue(getAllPlayersRef, (snapshot) => {
      const data = snapshot.val();
      result = data;
    });
  } catch (ex) {
    console.log(ex);
  }

  return result;
}
