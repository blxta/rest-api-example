const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const express = require("express");

const apicache = require("apicache");

const router = express.Router();

const cache = apicache.middleware;

router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
