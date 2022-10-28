import express from "express";
const router = express.Router();

import HomeController from "../controllers/home.js";
import LogingIn from "../controllers/logingIn.js";
import DashboardController from "../controllers/dashboard.js";

router.get("/", HomeController);

router.post("/login", LogingIn);

router.post("/dashboard", DashboardController);


export default router;
