import $ from 'jquery';
import './App.scss';
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { images } from "./utils/imagesToLoad";
import Router from "./components/GlobalComponents/Router/AppRouter";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => resolve(image);
      newImage.onerror = (err) => reject(err);
    });
  };

  useEffect(() => {
    isLoading && $('body').addClass("ovf-hidden");
    Promise
      .all(images.map((image) => loadImage(image)))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log("Failed to load images", err)
        setIsLoading(false);
      });
    // eslint-disable-next-line  
  }, []);

  useEffect(() => {
    !isLoading && $('body').removeClass("ovf-hidden");
    !isLoading && $('#loader').addClass("hide");
  }, [isLoading]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;