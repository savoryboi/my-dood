import React, { useState } from "react";

function UploadTest() {
  const [selectedPic, setSelectedPic] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedPic(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleSubmission = () => {};

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {selectedPic ? (
        <div>
          <p>Filename: {selectedPic.name}</p>
        </div>
      ) : (
        <p>Upload an Image</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export default UploadTest;
