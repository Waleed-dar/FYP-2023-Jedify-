import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calan() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-end mt-5 ">
      <div className="w-52 h-48"> {/* Adjust width and height to your preference */}
        <Calendar
          onChange={onChange}
          value={value}
          className="bg-white border border-blue-300 rounded p-0 shadow-md text-xs"
          calendarClassName="bg-white border border-blue-300 rounded shadow-md"
          tileClassName="text-xs" // Adjust the font size of the calendar cells
        />
      </div>
    </div>
  );
}

export default Calan;
