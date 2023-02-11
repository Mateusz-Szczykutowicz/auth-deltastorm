import { configI } from "./src/interfaces/config.interface";

const config: configI = {
    PORT: 8000,
    db: {
        local: "mongodb://localhost:27017/auth",
    },
};

export default config;
