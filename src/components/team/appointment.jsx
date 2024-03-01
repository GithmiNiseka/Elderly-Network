import React from 'react'


const appointment = ({ onClose }) => {

  return (
    <div className="popup">
    <div className="popup-content">
      <span className="close" onClick={onClose}>&times;</span>
      <h2>Your Form Title</h2>
      {/* Your form elements go here */}
      <form>
        {/* Form fields go here */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        {/* Add other form fields as needed */}
      </form>
    </div>
  </div>
  )
}

export default appointment
