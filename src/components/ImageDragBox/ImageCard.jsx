import React from "react";

function ImageCard() {
  return (
    <div className="rounded-2xl bg-white shadow-2xl w-[120px] h-[110px] flex items-center justify-center">
      <div className="w-[110px] h-[100px] cursor-pointer rounded-2xl m-1.5 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D')]"></div>
    </div>
  );
}

export default ImageCard;
