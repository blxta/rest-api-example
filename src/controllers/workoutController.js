const workoutService = require("../services/workoutServices");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};
const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkouts = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updateworkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkouts,
  updateOneWorkout,
  deleteOneWorkout,
};