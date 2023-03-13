const pool = require("../database/index");
const controller = {
  getAllRestaurant: async (req, res) => {
    try {
      const sql = "select * from restaurant order by name asc";
      const [rows, fields] = await pool.query(sql);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getByIdRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const sql = "select * from restaurant where id = ?";
      const [rows, fields] = await pool.query(sql, [id]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getAllRestaurantStar: async (req, res) => {
    try {
      const sql =
        "select * from restaurant where star > 3 order by star desc, name";
      const [rows, fields] = await pool.query(sql);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getByNameRestaurant: async (req, res) => {
    try {
      const { name } = req.params;
      const n = "%" + name + "%";
      const sql = "select * from restaurant where name LIKE ?";
      const [rows, fields] = await pool.query(sql, [n]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getAllRestaurantCategory: async (req, res) => {
    try {
      const sql = "select distinct category from restaurant order by category";
      const [rows, fields] = await pool.query(sql);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getByCategoryRestaurant: async (req, res) => {
    try {
      const { category } = req.params;
      const sql = "select * from restaurant where category = ?";
      const [rows, fields] = await pool.query(sql, [category]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getByStarRestaurant: async (req, res) => {
    try {
      const { star } = req.params;
      const sql = "select * from restaurant where star = ?";
      const [rows, fields] = await pool.query(sql, [star]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getMenu: async (req, res) => {
    try {
      const { idMenu } = req.params;
      const sql =
        "select distinct producto.id, producto.name, producto.description, producto.price, producto.img from producto, producto_menu where producto.id = producto_menu.idProducto AND producto_menu.idMenu = ? ";
      const [rows, fields] = await pool.query(sql, [idMenu]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
  getByEmailPasswordUsuario: async (req, res) => {
    try {
      const { email, password } = req.params;
      const sql = "select * from usuario where email = ? and password = ?";
      const [rows, fields] = await pool.query(sql, [email, password]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: error,
      });
    }
  },
};

module.exports = controller;
