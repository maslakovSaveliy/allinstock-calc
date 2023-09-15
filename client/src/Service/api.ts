import { Dispatch } from "react";

class API {
  async getPass(pass: string) {
    const data = await fetch("http://45.9.41.104:3000/api/pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
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
    await fetch("http://45.9.41.104:3000/api/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
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

  async getCourse(
    setCourse: Dispatch<React.SetStateAction<number>>,
    setTime: Dispatch<React.SetStateAction<string>>,
    setIsLoading: Dispatch<React.SetStateAction<boolean>>
  ) {
    setIsLoading(true);
    await fetch("http://45.9.41.104:3000/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://http://localhost:5173",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourse(data.course);
        setTime(data.time);
      })
      .catch((error) => {
        console.error("Произошла ошибка при получении значения course:", error);
      });
    setIsLoading(false);
  }
}

export const api = new API();
