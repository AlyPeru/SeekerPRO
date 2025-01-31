import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postEmpresa } from "../../redux/actions/index";
import NavHomeE from "./modules/NavHomeE";
import { useNavigate } from "react-router-dom";

export default function FormPerfil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    location: "",
    cuit: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postEmpresa(input));
    alert("Empresa completada");
    setInput({
      name: "",
      description: "",
      location: "",
      cuit: "",
    });
    navigate(-1);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-verdeOscuro w-screen h-screen ">
      <div>
        {/* NAVsEGACION */}
        <NavHomeE titulo={"Crear"} />
        {/* FORM PERFIL VACANTE */}
      </div>
      <div className=" flex  rounded-2xl justify-center">
        <div className="w-auto flex rounded-2xl justify-center">
          <form
            className="w-full m-9 mauto rounded-2xl  bg-verdeMedio"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full flex flex-col m-0 justify-center">
              <h3 className="text-center">Name:</h3>
              <input
                className="w-full xl:w-60 m-0 border-verdeMuyClaro rounded-2xl bg-verdeClaro"
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col m-0 justify-center">
              <h3 className="text-center">Description:</h3>
              <input
                className="w-full xl:w-60 m-0 border-verdeMuyClaro rounded-2xl bg-verdeClaro"
                type="text"
                name="description"
                value={input.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col m-0 justify-center">
              <h3 className="text-center">Location:</h3>
              <input
                className="w-full xl:w-60 m-0 border-verdeMuyClaro rounded-2xl bg-verdeClaro"
                type="text"
                name="location"
                value={input.location}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col m-0 justify-center">
              <h3 className="text-center">CUIT:</h3>
              <input
                className="w-full m-0 border-verdeMuyClaro rounded-2xl bg-verdeClaro"
                type="text"
                name="cuit"
                value={input.cuit}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full  my-3 flex m-0 justify-center">
              <button
                className=" w-32 shadow-lg shadow-black rounded-2xl text-verdeHover bg-verdeOscuro hover:bg-verdeClaro"
                type="submit"
              >
                Guardar Perfil
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
