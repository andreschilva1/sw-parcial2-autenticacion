import Router from "express";
import {getAllMantenimientos,addMatenimiento} from "../controllers/mantenimiento.controller.js";


const router = Router();

router.get("/getAllMantenimientos", getAllMantenimientos);

router.post("/addMantenimiento", addMatenimiento);


export default router;