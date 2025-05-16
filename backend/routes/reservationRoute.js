
import express from "express";
import sendReservation from "../controller/reservation.js";
import { editReservation, deleteReservation } from "../controller/reservation.js"; // Import edit and delete functions

const router = express.Router();

// Create a new reservation
router.post("/send", sendReservation);

// Edit a reservation
router.put("/:id", editReservation);

// Delete a reservation
router.delete("/:id", deleteReservation);

export default router;
