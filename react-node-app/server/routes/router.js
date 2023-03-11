const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.get("/restaurant", controller.getAllRestaurant);
router.get("/restaurant/star", controller.getAllRestaurantStar);
router.get("/restaurant/category", controller.getAllRestaurantCategory);
router.get("/restaurant/id/:id", controller.getByIdRestaurant);
router.get("/restaurant/name/:name", controller.getByNameRestaurant);
router.get(
  "/restaurant/category/:category",
  controller.getByCategoryRestaurant
);
router.get("/restaurant/star/:star", controller.getByStarRestaurant);
router.get("/restaurant/menu/:idMenu", controller.getMenu);

module.exports = router;
