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
router.get("/usuario/:email/:password", controller.getByEmailPasswordUsuario);
router.get(
  "/lineorder/:idpedido/:idproducto/:cantidad",
  controller.postLineOrder
);
router.get("/order/user/:idUser", controller.getOrderByUser);
router.get("/order/:id/:date", controller.postOrder);

module.exports = router;
