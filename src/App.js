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

  const [pass, setPass] = useState('');
  const [access, setAccess] = useState(false);

  const sendPass = () => {
    fetch('https://whoareyou.devindex.net/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pass }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.result === true && data.token) {
          const expirationTime = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem('authToken', JSON.stringify({ token: data.token, expires: expirationTime }));
          setAccess(true);
        } else {
          alert('Неверный пароль');
        }
      });
  };

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('authToken'));
    if (authData) {
      const currentTime = new Date().getTime();
      if (authData.expires > currentTime) {
        setAccess(true);
      } else {
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  return (
    <>
      {!access ?
        <div style={{ padding: '20px', display: 'flex' }}>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{ padding: '0 10px', border: '1px solid #000' }}
          />
          <div
            onClick={sendPass}
            style={{ padding: '10px 20px', color: '#fff', background: '#000', cursor: 'pointer' }}
          >
            Send
          </div>
        </div>
        :
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      }
    </>
  );
};

export default App;