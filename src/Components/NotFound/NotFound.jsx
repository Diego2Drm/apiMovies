import React from "react";
import { HeaderPage } from "../Header/HeaderPage";
import { Footer } from "../Footer/Footer";

function NotFound() {
  return (
    <>
      <HeaderPage />
      <section className="w-full h-screen flex items-center justify-center text-[5rem] text-DarkBlue font-semibold">
        <div className="text-[10rem]">
          <ion-icon name="alert-circle-sharp"></ion-icon>
        </div>
        <p>
          Lo Sentimos No Encontramos Información Sobre Esta Película... <br />
          Intenta Con Otra.
        </p>

      </section>

      <Footer />
    </>
  );
};

export { NotFound };