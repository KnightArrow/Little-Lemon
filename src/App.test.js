import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import { BrowserRouter as Router, redirect } from 'react-router-dom';

describe('BookingForm component', () => {
  test('renders static text correctly', () => {
    redirect(<Main/>);
    render(<BookingForm />);
    const bookingFormHeading = screen.getByText('Make Your reservation');
    expect(bookingFormHeading).toBeInTheDocument();
  });
});
