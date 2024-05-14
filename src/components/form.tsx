'use client';
import { sendEmail } from "@/utils/send-email";
import { useState } from "react";

export type FormData = {
  nome: string;
  telefone: string;
  mensagem: string;
};

export default function Form() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    telefone: '',
    mensagem: '',
    email: ''
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setDadosFormulario((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    await sendEmail(formData);
    clearFormData();
  };

  const clearFormData = () => {
    setDadosFormulario({
      nome: '',
      telefone: '',
      mensagem: '',
      email: ''
    });
  };

  return (
    <div className="w-1/2 ml-16">
      <div className="border-black border-solid border rounded-2xl">
        <div className="m-10">
          <h2 className="text-2xl font-bold mb-2">Entre em contato conosco!</h2>
          <form onSubmit={onSubmit} className="mt-4 text-center">
            <input type="text"
              placeholder="Nome"
              name="nome"
              value={dadosFormulario.nome}
              onChange={handleInput}
              className="border-black border-solid border rounded-lg w-full py-2 p-2 mb-4 focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              required
            />
            <input type="text"
              placeholder="Telefone"
              name="telefone"
              value={dadosFormulario.telefone}
              onChange={handleInput}
              className="border-black border-solid border rounded-lg w-full py-2 p-2 mb-4"
              required
            />
            <input type="text"
              placeholder="E-mail"
              name="email"
              value={dadosFormulario.email}
              onChange={handleInput}
              className="border-black border-solid border rounded-lg w-full py-2 p-2 mb-4"
              required
            />
            <textarea
              placeholder="Mensagem"
              name="mensagem"
              value={dadosFormulario.mensagem}
              onChange={handleInput}
              className="border-black border-solid border rounded-lg w-full h-24 p-2 mb-4"
            ></textarea>

            <button className="bg-red-400 self-center mt-4 text-white center rounded-lg w-36 hover:outline outline-1 transition duration-500 ease-out hover:bg-white hover:text-black font-semibold text-lg py-2">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
