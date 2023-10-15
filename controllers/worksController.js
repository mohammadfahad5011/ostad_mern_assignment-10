const WorksModel = require("../models/WorksModel");

const getAllWorks = (req, res) => {
  WorksModel.find({}, (err, works) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(works);
    }
  });
};

const getWorkById = (req, res) => {
  const workId = req.params.id;
  WorksModel.findById(workId, (err, work) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(work);
    }
  });
};

const createWork = (req, res) => {
  const workData = req.body;
  WorksModel.create(workData, (err, newWork) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(201).json(newWork);
    }
  });
};

const updateWork = (req, res) => {
  const workId = req.params.id;
  const updatedWorkData = req.body;
  WorksModel.findByIdAndUpdate(
    workId,
    updatedWorkData,
    { new: true },
    (err, updatedWork) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(updatedWork);
      }
    }
  );
};

const deleteWork = (req, res) => {
  const workId = req.params.id;
  WorksModel.findByIdAndDelete(workId, (err) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(204).send();
    }
  });
};

module.exports = {
  getAllWorks,
  getWorkById,
  createWork,
  updateWork,
  deleteWork,
};
