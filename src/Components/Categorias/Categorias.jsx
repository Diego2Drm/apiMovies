import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=639ffac191a35e90345c4e5e6f416515')
      .then(response => response.json())
      .then(data => setCategorias(data))
  }, []);

  // console.log(categorias);
  //   console.log(categorias.genres);


  return (
    <ul className="md:flex md:flex-wrap md:p-3 md:px-6 *:mx-4 *:cursor-pointer capitalize md:bg-DarkBlue md:ml-5">
      {
        categorias.genres?.map((categoria) => (
          <li key={categoria.id} className="flex items-center space-x-2 text-sm text-green-400 hover:text-blue-900 ">
            <ion-icon name="square"></ion-icon>
            <Link to={`/categorias/${categoria.name}/${categoria.id}`} className="text-xl text-white hover:text-blue-500">
            {categoria.name}
            </Link>
          </li>
        ))
      }
    </ul>

  );
};

export { Categorias };