import { attach } from "./store.js";
import App from "./component/app.js";
// here functions attach take
// attch ( component , root)
//Component => (form App)
// Root => Dom
 attach(App ,document.getElementById("root"));
 
