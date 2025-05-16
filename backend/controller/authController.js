
import { Reservation } from "../models/reservationSchema.js";

export const login_user = async (req, res, next) => {
  const { email, phone } = req.body;
  
  try {
    const reservations = await Reservation.find({ email, phone });
    if (reservations.length > 0) {
      res.status(200).json({ success: true, reservations });
    } else {
      res.status(401).json({ success: false, message: "Invalid email or phone number" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export default login_user;