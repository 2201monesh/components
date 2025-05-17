import React from "react";

function ImageCard() {
  const cards = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1542806109-e88b46573e79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1542977466-bbacf83cb0b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1543411789-ca12d5f935ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1488572749058-7f52dd70e0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzh8fHxlbnwwfHx8fHw%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1538941214074-9b578e573632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTA2fHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <div className="w-[40%] h-[40%] flex flex-wrap gap-3">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-2xl w-[120px] h-[110px] flex items-center justify-center"
          >
            <div
              className="w-[110px] h-[100px] cursor-pointer rounded-2xl m-1.5 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imgUrl})` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageCard;
