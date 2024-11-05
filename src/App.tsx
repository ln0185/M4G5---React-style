import { useState } from "react";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

import china1 from "./assets/ressources/china1.jpg";
import china2 from "./assets/ressources/china2.jpg";
import china3 from "./assets/ressources/china3.jpg";

function App() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold text-center mt-8">Visit China</h1>

      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="rounded overflow-hidden">
              <img src={china1} alt="China 1" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="rounded overflow-hidden shadow-lg">
              <img src={china2} alt="China 2" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="rounded overflow-hidden shadow-lg">
              <img src={china3} alt="China 3" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default App;
