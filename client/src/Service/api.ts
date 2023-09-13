import { Dispatch } from "react";

class API {
  async getPass(pass: string) {
    const data = await fetch("http://localhost:3000/api/pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: pass }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
      });
    return data.password;
  }

  async changeCourse(
    input: number | string,
    setCourse: Dispatch<React.SetStateAction<string | number>>
  ) {
    await fetch("http://localhost:3000/api/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: Number(input),
        password: localStorage.getItem("pass"),
      }),
    }).catch((error) => {
      console.error("Произошла ошибка при изменении значения course:", error);
    });

    setCourse(input);
  }
}

export const api = new API();
