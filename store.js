import { createApp } from "./core.js";
import reducer from "./reducer.js"; 
const { attach , connect , dispatch} = createApp(reducer);
window.dispatch = dispatch;
export {
    attach,
    connect
}