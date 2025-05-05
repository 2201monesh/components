import React, { useState, useEffect } from "react";

const MAX_FILES = 5;

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).slice(
      0,
      MAX_FILES - images.length
    );
    handleFiles(files);
  };

  const handleInputChange = (e) => {
    const files = Array.from(e.target.files).slice(
      0,
      MAX_FILES - images.length
    );
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImages = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      progress: 0,
      url: null,
    }));

    setImages((prev) => [...prev, ...newImages]);
    setShowDialog(true);

    newImages.forEach((img) => simulateUpload(img));
  };

  const simulateUpload = (image) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setImages((prev) =>
        prev.map((img) =>
          img.id === image.id
            ? {
                ...img,
                progress,
                url: progress >= 100 ? URL.createObjectURL(img.file) : null,
              }
            : img
        )
      );
      if (progress >= 100) clearInterval(interval);
    }, 300);
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  useEffect(() => {
    if (images.length > 0 && images.every((img) => img.progress === 100)) {
      const timer = setTimeout(() => setShowDialog(false), 500);
      return () => clearTimeout(timer);
    }
  }, [images]);

  return (
    <div
      className="upload-card"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {images.filter((img) => img.url).length === 0 && (
        <div className="upload-placeholder">
          <img
            src="https://img.icons8.com/ios-filled/50/image.png"
            alt="Upload"
          />
          <p>Drop your images here or click to upload (max 5)</p>
        </div>
      )}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="upload-overlay"></label>

      <div className="image-grid">
        {images
          .filter((img) => img.url)
          .map((img) => (
            <div key={img.id} className="image-container">
              <span
                className="delete-btn"
                onClick={() => handleRemoveImage(img.id)}
              >
                ×
              </span>
              <img src={img.url} alt="Uploaded" />
            </div>
          ))}
      </div>

      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3>Uploading Images...</h3>
            {images
              .filter((img) => img.progress < 100)
              .map((img) => (
                <div key={img.id} className="upload-item">
                  <span className="img-name">{img.name}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${img.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <style>{`
        .upload-card {
          border: 2px dashed #ccc;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          position: relative;
          min-height: 300px;
          max-width: 700px;
          margin: auto;
          background: #fafafa;
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .upload-placeholder img {
          width: 40px;
          height: 40px;
        }

        .upload-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          cursor: pointer;
        }

        .image-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 20px;
          justify-content: center;
        }

        .image-container {
          position: relative;
          width: 150px;
          height: 150px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .delete-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(0,0,0,0.6);
          color: white;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .dialog {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .dialog-content {
          background: white;
          padding: 20px 30px;
          border-radius: 10px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        .upload-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 10px;
        }

        .img-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .progress-bar {
          width: 50%;
          height: 8px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background-color: #4caf50;
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ImageUploader;
