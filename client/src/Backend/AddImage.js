import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./styles.css";

function AddImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default AddImage
