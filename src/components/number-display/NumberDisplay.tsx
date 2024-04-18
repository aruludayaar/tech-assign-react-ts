import React, { useState } from "react";
import "./number-display.css"

function NumberDisplay() {
  // type as string to accept empty string.
  const [number, setNumber] = useState<string>("");
  const [numbersList, setNumbersList] = useState<number[]>([]);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // limit to only 3 numbers
    const num = event.target.value.slice(0,3);
    setNumber(num);
    const inputNumber = Number(num);
    if (inputNumber >= 0) {
      const numbers: number[] = new Array(inputNumber)
        .fill("0")
        .map((_, index) => index + 1);
      setNumbersList(numbers);
    }
  };

  return (
    <div className="number-display card">
      <div className="row card-body">
        <div className="col-12">
          <h5 className="card-title">Numbers Display</h5>
        </div>
        <div className="col-6">
          <form>
            <label htmlFor="number-input" className="col-form-label">
              Number
            </label>
            <input
              id="number-input"
              type="number"
              value={number}
              onChange={handleNumberChange}
              min={0}
              max={999}
              className="form-control  mb-3"
            />
          </form>
        </div>
        <div className="col-12 mt-3 numbers-display-sec">
          <ul>
            {number && numbersList.map((num) => <li key={num}>{num}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NumberDisplay;
