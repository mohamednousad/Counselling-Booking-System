const mongoose = require("mongoose");

class CrudService {
  constructor(Model) {
    this.Model = Model;
  }

  async create(req, res) {
    try {
      const data = await this.Model.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((e) => e.message);
        return res
          .status(400)
          .json({ error: "All fields are required", errors });
      }
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again later" });
    }
  }

  async getAll(req, res) {
    try {
      const data = await this.Model.find();
      res.json(data);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Unable to fetch data. Please try again later" });
    }
  }

  async getUnique(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ error: "Invalid request. Please check your ID" });

    try {
      const data = await this.Model.findById(req.params.id);
      if (!data) return res.status(404).json({ error: "No record found" });

      res.json(data);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Unable to fetch the data. Please try again later" });
    }
  }

  // Get data by userId
  async getDataByUser(req, res) {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).json({ error: "Invalid ID format" });
      
      const data = await this.Model.find({ userId: req.params.id });
      if (!data || data.length === 0) {
        return res.status(404).json({ error: "No data found for this user" });
      }
      res.json(data);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Unable to fetch data. Please try again later" });
    }
  }

  async update(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).json({ error: "Invalid ID format" });

    if (!req.body || Object.keys(req.body).length === 0)
      return res.status(400).json({ error: "Update data cannot be empty" });

    try {
      const data = await this.Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!data)
        return res.status(404).json({ error: "No record found to update" });

      res.json({ message: "Updated successfully", data });
    } catch (err) {
      res.status(500).json({ error: "Update failed", details: err.message });
    }
  }

  async delete(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ error: "Invalid request. Please check your ID" });

    try {
      const data = await this.Model.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json({ error: "No record found to delete" });

      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Deletion failed. Please try again later" });
    }
  }
}

module.exports = CrudService;
