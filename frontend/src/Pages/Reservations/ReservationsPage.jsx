import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ReservationsPage.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ReservationsPage = () => {
  const { state } = useLocation();
  const initialReservations = state?.reservations || [];
  const [reservations, setReservations] = useState(initialReservations);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedReservation, setEditedReservation] = useState({ date: '', time: '', people: '' });

  const handleDelete = async (index) => {
    const reservation = reservations[index];
    try {
      await axios.delete(`http://localhost:4000/api/v1/reservation/${reservation._id}`);
      setReservations(reservations.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting reservation:', error);
      // Handle error appropriately
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedReservation({ ...reservations[index] });
  };

  const handleSave = async (index) => {
    const reservation = reservations[index];
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/reservation/${reservation._id}`, editedReservation);
      // console.log('Response from server:', response.data.data);
      const updatedReservations = reservations.map((res, i) =>
        i === index ? response.data.data : res
      );
      // console.log('Updated Reservations:', updatedReservations);
      setReservations(updatedReservations);
      setEditingIndex(null);
      setEditedReservation({ date: '', time: '', people: '' });
    } catch (error) {
      console.error('Error updating reservation:', error);
      // Handle error appropriately
    }
  };
  

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReservation({ ...editedReservation, [name]: value });
  };

  return (
    <div className="rescontainer">
      <h2 className="reshead">YOUR RESERVATIONS</h2>
      {reservations.length > 0 ? (
        <ul className="reservation-list">
          {reservations.map((reservation, index) => (
            <li key={index} className="reservation-item">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    name="date"
                    value={editedReservation.date}
                    onChange={handleChange}
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    name="time"
                    value={editedReservation.time}
                    onChange={handleChange}
                    placeholder="Time"
                  />
                  <input
                    type="number"
                    name="people"
                    value={editedReservation.people}
                    onChange={handleChange}
                    placeholder="Number of People"
                  />
                  <div className="buttons">
                    <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <p data-label="Date:">{reservation.date}</p>
                  <p data-label="Time:">{reservation.time}</p>
                  <p data-label="Number of People:">{reservation.people}</p>
                  <div className="buttons">
                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-reservations">No reservations found.</p>
      )}
      <Link className='reslink' to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
    </div>
  );
};

export default ReservationsPage;
