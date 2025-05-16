import ErrorHandler from '../error/error.js'
import { Reservation } from "../models/reservationSchema.js";

const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone, people } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone || !people) {
      return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
    }
  
    try {
      await Reservation.create({ firstName, lastName, email, date, time, phone, people });
      res.status(201).json({
        success: true,
        message: "Reservation Sent Successfully!",
      });
    } catch (error) {
      // Handle Mongoose validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
      }
  
      // Handle other errors
      return next(error);
    }
};
  
  
export default send_reservation;

export const editReservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, date, time, phone, people } = req.body;

    const updatedReservation = await Reservation.findByIdAndUpdate(id, { firstName, lastName, email, date, time, phone, people }, { new: true });

    if (!updatedReservation) {
      return next(new ErrorHandler("Reservation not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Reservation updated successfully",
      data: updatedReservation
    });
  } catch (error) {
    return next(error);
  }
};

// Delete Reservation
export const deleteReservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return next(new ErrorHandler("Reservation not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Reservation deleted successfully"
    });
  } catch (error) {
    return next(error);
  }
};
