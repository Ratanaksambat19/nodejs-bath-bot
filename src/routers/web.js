import express from "express";
import chatBotController from "../controllers/chatBotController";
import homepageController from "../controllers/homepagecontroller";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get('/', homepageController.getHomepage);
    router.get('/webhook', chatBotController.getWebhook);
    router.get('/webhook', chatBotController.postWebhook);
    return app.use('/', router)
}

module.exports = initWebRoutes;