import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio de formulário
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-comigo-gray">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-comigo-blue mb-2">
          Entre na sua conta
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Boas-vindas! Por favor, insira suas credenciais para acessar os
          sistemas da Comigo.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Senha"
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox h-4 w-4 text-comigo-blue"
              />
              <span className="ml-2 text-sm text-gray-600">
                Mantenha-me conectado.
              </span>
            </label>
            <a href="#" className="text-sm text-comigo-blue hover:underline">
              Esqueci minha senha
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-comigo-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
