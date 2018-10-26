import {get} from "./index.js";

export function getCategory() {
    return get("/getCategory")
}