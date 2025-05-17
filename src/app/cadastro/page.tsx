'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de cadastro aqui
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo - Preto */}
      <div className="w-1/2 bg-black p-12 flex flex-col justify-between pt-[15%]">
        <div className="flex flex-col items-center text-center">
          <div className="justify-center">
            <Image 
              src="/logo.svg" 
              alt="Elifoot Logo" 
              width={180} 
              height={50}
              className="mb-16"
            />
            <h1 className="text-white text-5xl font-bold mb-4 text-left">Bem-vindo<br />de volta!</h1>
            <p className="text-white text-xl mb-8 text-left">Acesse sua conta agora mesmo.</p>
          </div>
          <Link 
            href="/"
            className="text-white border-2 border-white rounded-full px-12 py-3 text-center text-xl font-bold hover:bg-white hover:text-black transition-colors mb-4"
            style={{
              width: '290px',
              borderRadius: '10px',
              marginTop: '30px'
            }}
          >
            ENTRAR
          </Link>
          <Link 
            href="/esqueci-senha" 
            className="text-white text-sm hover:underline"
          >
            Esqueci minha senha.
          </Link>
        </div>
      </div>

      {/* Lado Direito - Branco */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-4xl font-bold mb-2 text-center text-black">Crie sua conta</h2>
          <p className="text-gray-400 mb-8 text-center">Preencha seus dados</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black pl-10 bg-gray-100"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiUser size={20} />
              </span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Seu Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black pl-10 bg-gray-100"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiMail size={20} />
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Sua Senha"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black pl-10 bg-gray-100"
                value={formData.senha}
                onChange={(e) => setFormData({...formData, senha: e.target.value})}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock size={20} />
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Confirme sua Senha"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black pl-10 bg-gray-100"
                value={formData.confirmarSenha}
                onChange={(e) => setFormData({...formData, confirmarSenha: e.target.value})}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock size={20} />
              </span>
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-full px-12 py-3 text-xl font-bold hover:bg-gray-800 transition-colors mt-4 mx-auto block"
              style={{
                width: '250px',
                borderRadius: '10px',
              }}
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
