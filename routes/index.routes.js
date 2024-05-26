import auth from "./auth.routes.js";
import user from "./user.routes.js";


const PREFIX_API = "/api";

export const routeMappings = [
  { routeName: "auth", prefix: PREFIX_API },
  { routeName: "user", prefix: PREFIX_API },
];

export default {
  auth,
  user,
};
