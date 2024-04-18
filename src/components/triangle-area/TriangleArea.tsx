import React, { useEffect, useState } from "react";

function TriangleArea() {
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [area, setArea] = useState<string>("");

  useEffect(() => {
    if (width && height) {
      const inputWidth = Number(width);
      const inputHeight = Number(height);
      const calculatedArea = ((inputWidth * inputHeight) / 2).toString();
      setArea(calculatedArea);
    }
  }, [width, height])

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  return (
    <div className="triangle-area card">
      <div className="row card-body">
        <div className="col-12">
          <h5 className="card-title">Area of Triangle</h5>
        </div>
        <div className="col-6">
          <label htmlFor="triangle-width">Width</label>
          <input
            id="triangle-width"
            type="number"
            value={width}
            onChange={handleWidthChange}
            className="form-control mb-3"
          />
          <label htmlFor="triangle-height">Height</label>
          <input
            id="triangle-height"
            type="number"
            value={height}
            onChange={handleHeightChange}
            className="form-control mb-3"
          />
        </div>        
        <div className="col-12  mt-3">
          {width && height && area && (
            <p>The area of the triangle is: {area}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TriangleArea;
