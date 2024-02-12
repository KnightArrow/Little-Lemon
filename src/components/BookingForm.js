import React, { useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../css/BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState("");

  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.guests) {
            errors.guests = "Number of guests is required";
          }
          if (!values.occasion) {
            errors.occasion = "Occasion is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted with values: ", values);
          values.guests = 1;
          values.time = "";
          values.date = values.date;
          values.time = availableTimes[0];
          values.occasion = "";
          setSubmitting(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <h1>Make Your reservation</h1>
            <div> 
              <label htmlFor="res-date" className="form-label" aria-label='Date'>Choose date</label>
              <Field type="date" id="res-date" name="date" value={selectedDate} onChange={handleDateChange} className="form-input" aria-label="Choose date" />
              <ErrorMessage name="date" component="div" className="error-message" />
            </div>  
            <div>
              <label htmlFor="res-time" className="form-label" aria-label="Choose time">Choose time</label>
              <Field as="select" id="res-time" name="time" className="form-input" aria-label="Choose time">
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="guests" className="form-label" aria-label="Number of guests">Number of guests</label>
              <Field type="number" id="guests" name="guests" min="1" max="10" className="form-input" aria-label="Number of guests" />
              <ErrorMessage name="guests" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="occasion" className="form-label" aria-label="Occasion">Occasion</label>
              <Field as="select" id="occasion" name="occasion" className="form-input" aria-label="Occasion">
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button" aria-label="Make Your reservation">Make Your reservation</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BookingForm;
