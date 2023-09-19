import { Dispatch } from "react";
import { db } from "./firebase";
import { ref, onValue, update } from "firebase/database";

class API {
  async getPass() {
    let dbPass: string | undefined;
    await onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dbPass = data.pass;
      }
    });
    return dbPass;
  }

  async changeCourse(
    input: number | string,
    setCourse: Dispatch<React.SetStateAction<string | number>>
  ) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;
    update(ref(db, "/course"), { course: input, time: currentTime });
    setCourse(input);
  }

  async getCourse(
    setCourse: Dispatch<React.SetStateAction<number>>,
    setTime: Dispatch<React.SetStateAction<string>>,
    setIsLoading: Dispatch<React.SetStateAction<boolean>>
  ) {
    setIsLoading(true);
    await onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCourse(data.course.course);
        setTime(data.course.time);
      }
    });
    setIsLoading(false);
  }
}

export const api = new API();
