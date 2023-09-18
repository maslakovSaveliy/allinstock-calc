import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "config";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let courseValue: number = 13.6;
let pass: string = config.get("PASSWORD");
let time: string = "";

app.get("/api/course", (req: express.Request, res: express.Response) => {
  res.json({ course: courseValue, time: time });
});

app.post("/api/pass", (req: express.Request, res: express.Response) => {
  const password = req.body.password;

  const auth = password === pass;

  if (auth) {
    res.json({ password: pass });
  } else {
    res.status(401).json({
      success: false,
      message: "Login fail",
    });
  }
});

app.post("/api/course", (req: express.Request, res: express.Response) => {
  const password = req.body.password;

  const auth = password === pass;

  if (auth) {
    const newCourseValue: number = req.body.course;
    if (typeof newCourseValue !== "undefined") {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const currentTime = `${hours}:${minutes}`;
      time = currentTime;
      courseValue = newCourseValue;
      res.json({
        message: "Значение course успешно обновлено",
        course: courseValue,
      });
    } else {
      res.status(400).json({ error: "Некорректное значение course" });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Login fail",
    });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

export default app;
