import { express, json } from "express";
import helmet from "helmet";

const app = express();
app.use(json());
app.use(helmet());
app.disable('x-powered-by');




const PORT = process.env.PORT ?? 1108

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} visit on http://localhost:${PORT}`)
})