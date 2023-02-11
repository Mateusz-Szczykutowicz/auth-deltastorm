import { configI } from "./src/interfaces/config.interface";

const config: configI = {
    PORT: 8000,
    db: {
        local: "mongodb://127.0.0.1:27017/auth",
    },
};

export default config;
