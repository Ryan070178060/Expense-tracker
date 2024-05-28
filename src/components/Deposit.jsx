import React, { useState } from 'react';
import './Deposit.css';

const Deposit = () => {
    const [purpose, setPurpose] = useState('');

    const handlePurposeChange = (event) => {
        setPurpose(event.target.value);
    };

    const handleDeposit = () => {
        if (!purpose) {
            alert("Please select a purpose for the deposit.");
            return;
        }
        // Redirect to PayPal (replace 'YOUR_PAYPAL_URL' with the actual PayPal URL)
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YOUR_PAYPAL_BUTTON_ID';
    };

    return (
        <div className="deposit-container">
            <h1>Deposit Funds</h1>
            <div className="form-group">
                <label htmlFor="purpose">Select Purpose:</label>
                <select id="purpose" value={purpose} onChange={handlePurposeChange}>
                    <option value="">--Select Purpose--</option>
                    <option value="furniture">Furniture</option>
                    <option value="transportation">Transportation</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                    <option value="healthcare">Healthcare</option>
                </select>
            </div>
            <button onClick={handleDeposit}>Deposit via PayPal</button>
        </div>
    );
};

export default Deposit;
