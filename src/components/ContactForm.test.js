import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
   render(<ContactForm />);
});

test('renders the contact form header', ()=> {
    render(<ContactForm />);
    const header = screen.getByText(/Contact Form/)
    expect(header).toBeInTheDocument()
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<ContactForm/>); 
    const firstNameInput = screen.getByPlaceholderText('Edd')
    userEvent.type(firstNameInput,'plt')
    const firstNameError = screen.getByTestId('error')
    expect(firstNameError).toBeVisible()

});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<ContactForm />); 
    const firstNameInput = screen.getByPlaceholderText('Edd')
    userEvent.type(firstNameInput,null)
    const lastNameInput = screen.getByPlaceholderText('Burke')
    userEvent.type(lastNameInput,null)
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com')
    userEvent.type(emailInput,null)
    const errors = screen.getByTestId('error')
    expect(errors).toBeVisible()
    screen.debug()

});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});