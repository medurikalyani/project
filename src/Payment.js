import React, { useState } from "react";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Payment= () => {
const [CardHolderName,setCardHolderName] = useState();
const [CardNumber,setCardNumber] = useState();
const [CVV,setCVV] = useState();
  const [startDate, setStartDate] = useState(new Date());
 
  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      let response = await fetch("http://localhost:24396/api/payment", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
       
        CardHolderName: CardHolderName,
        CardNumber: CardNumber,
        ExpiryDate:startDate,
        CVV: CVV
          
        })
      }).then(() => {
        alert("Card details entered Successfully");
        console.log('Successful');

      }).error((err)=>{
        alert("Unsuccesful");
      })

      console.log(CardHolderName,CardNumber,startDate,CVV);
    }
    catch(error){
      console.log(error);
      
    }
  };
  return (
<div>
<div className="boxed">
       <h2>Card Payment</h2>    
      <form onSubmit={submitHandler}>
      <div className="input-group">
        <label>Card Holder Name:</label> 
        <input
          type="text"
          name="cardname"
          value={CardHolderName}
          placeholder="for eg: Manish Sharma"
          label="cardName"
          onChange={(e) => setCardHolderName(e.target.value)}
          spellCheck ="false"
          required
        />
       </div>
       <div className="input-group">
        <label>Card Number:</label>
        <input
          type="text"
          name="cardnumber"
          value={CardNumber}
          placeholder="Enter a valid card number"
          label="card number"
          onChange={(e) => setCardNumber(e.target.value)}
          pattern="[\d| ]{16}"
          maxLength={16} 
          required
        />
        </div>    
        <div className="input-group">     
        <label>Expiry Date:</label>
          <DatePicker className="DatePicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker></DatePicker>
       </div>
       <div className="input-group">
        <label>CVV</label>
        <input
          type="password"
          name="cvv"
          placeholder="cvv"
          label="CVV"
          value={CVV}
          onChange={(e) => setCVV(e.target.value)}
          pattern="[\d| ]{3}"
          maxLength={3}
         required
        />
       </div>
       <button onClick={submitHandler} className= "submit-button">Submit</button>
      </form>    
    </div>
</div>
  );

  
};
export default Payment;