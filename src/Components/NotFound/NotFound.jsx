import React from "react";
import { HeaderPage } from "../Header/HeaderPage";
import { Footer } from "../Footer/Footer";

function NotFound() {
  return (
    <>
      <HeaderPage />
      <section className="w-full h-screen flex flex-col items-center pt-32 md:justify-center md:pt-0 md:flex-row text-DarkBlue font-semibold px-32">
        <div className="text-[10rem]">
          <ion-icon name="alert-circle-sharp"></ion-icon>
        </div>
        <p className="text-center text-3xl md:text-[4rem] md:text-start md:leading-[6.5rem]">
          Lo Sentimos No Encontramos Información Sobre Esta Película... <br />
          Intenta Con Otra.
        </p>

      </section>

      <Footer />
    </>
  );
};

export { NotFound };