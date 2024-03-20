"use client";

import { Carousel } from "flowbite-react";

function CarouselCom() {
  return (
    <div className="h-36  sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://images.pexels.com/photos/20623991/pexels-photo-20623991/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/20623992/pexels-photo-20623992/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
        <img
          src="https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default CarouselCom;
