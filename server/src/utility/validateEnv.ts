import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";
import fs from "fs";
import os from 'os';
import path from 'path'
import * as dotenv from "dotenv";
// eslint-disable-next-line @typescript-eslint/no-var-requires
dotenv.config({ path: require('find-config')('.env') });


//const config = dotenv.parse(fs.readFileSync("/Volumes/UNTITLED/e_drie/freelancing_sagarsir/Hey-Taxi/server/src/utility/config.env"))
//const config = process.env
const config = process.env
//console.log(config)
export default cleanEnv( config, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    JWT_SECRET: str(),
    CLOUD_NAME: str(),
    API_KEY: str(),
    API_SECRET: str()
})

