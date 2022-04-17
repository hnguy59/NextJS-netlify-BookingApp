import firebase from "../lib/firebase";
import { getDatabase, ref, onValue, set, get, child } from "firebase/database";
import { playerModel } from "./model/playerModel";
import { RestoreOutlined } from "@material-ui/icons";

const db = getDatabase(firebase.app());

export function getAllPlayers() {
  const getAllPlayersRef = ref(db, "/players");
  let result = [];

  try {
    let snapshotResult = [];

    onValue(getAllPlayersRef, (snapshot) => {
      snapshot.forEach((item) => {
        snapshotResult[item.key] = item.val();
      });
    });

    // Sort by alphabet
    result = snapshotResult.sort((a, b) => {
      var textA = a.first_name.toUpperCase();
      var textB = b.first_name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
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

export function setPlayer(model: playerModel, index: number) {
  try {
    model.id = index;
    set(ref(db, "players/" + index), model);
    
  } catch (ex) {
    console.log(ex);
  }
}

export async function newIndex(): Promise<number> {
  let result: number;
  const dbRef = ref(db, "/players");

    await onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        result = snapshot.val().length;
      } else {
        result = 0;
      };
    });
  
  return await result;
}
