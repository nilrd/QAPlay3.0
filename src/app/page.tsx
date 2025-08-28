'use client'

import { useState } from 'react'
import Image from 'next/image'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  const frameworks = [
    'Selenium WebDriver',
    'Cypress',
    'Playwright',
    'Postman',
    'JUnit',
    'Cucumber',
    'Java',
    'JavaScript',
    'MySQL',
    'Git/GitHub',
    'Jira',
    'Qase'
  ]

  const projects = [
    {
      title: 'E2E Coders - Automação UI E-commerce',
      description: 'Desenvolvimento de automação completa para plataforma de e-commerce com testes end-to-end.',
      technologies: ['Selenium', 'Java', 'Cucumber', 'JUnit']
    },
    {
      title: 'Testes UI Plataforma Financeira',
      description: 'Implementação de testes de interface para sistema financeiro com alta criticidade.',
      technologies: ['Cypress', 'JavaScript', 'Postman']
    },
    {
      title: 'Sistema Bancário - Testes API',
      description: 'Criação de suite completa de testes para APIs de sistema bancário.',
      technologies: ['Postman', 'JavaScript', 'MySQL']
    },
    {
      title: 'Toque Ideal - CMS Headless',
      description: 'Desenvolvimento e testes para sistema de gerenciamento de conteúdo headless.',
      technologies: ['Playwright', 'TypeScript', 'API Testing']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo-qaplay.png"
              alt="QA Play Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              QA Play
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              QA Play é um projeto de estudos criado por <strong>Nilson da Silva Brites</strong>, com quizzes interativos para treinar e memorizar conhecimentos em QA. Simule certificações com explicações detalhadas. Não somos escola, ajudamos QAs a crescer em automação e ágeis.
            </p>
            <button
              onClick={openContactModal}
              className="btn-primary text-lg px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

      {/* Resumo do Currículo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Sobre Nilson da Silva Brites
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Profissional hands-on, autodidata e comprometido com aprendizado contínuo, buscando qualidade e superação em novas tecnologias. Com perfil analítico e comunicação eficaz, atuo como <strong>Analista de Testes</strong> em times ágeis (Scrum), participando do SDLC – do refinamento de histórias à entrega final.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Colaboro na clareza de requisitos, aplico shift-left testing para prevenir erros. Experiência em testes manuais e automatizados, usando técnicas de caixa preta (Particionamento de Equivalência, Análise de Valor Limite, Tabela de Decisão, Transição de Estado) para cobertura assertiva.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Executo testes funcionais, não funcionais, positivos, negativos e regressivos, mantenho scripts em pipelines, reporto bugs e sugiro melhorias.
            </p>
          </div>
        </div>
      </section>

      {/* Ferramentas e Tecnologias */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
            Ferramentas e Tecnologias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="card text-center p-4 hover:scale-105 transform transition-all duration-200"
              >
                <span className="font-medium text-blue-400">{framework}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Frameworks em Destaque</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Selenium com Cucumber/JUnit', 'Playwright', 'Cypress', 'Postman'].map((framework, index) => (
                <span
                  key={index}
                  className="badge badge-info text-lg px-6 py-2"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card hover:scale-105 transform transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-success text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nilson */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
            A Mentalidade QA
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              <strong>Nilson da Silva Brites</strong> é um QA apaixonado por tecnologia, IAs e qualidade. Curioso, com habilidades em liderança, cria projetos únicos.
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold text-green-400 italic mb-8">
              &ldquo;O impossível já foi feito; o novo é pioneirismo – a evolução tecnológica prova isso.&rdquo;
            </blockquote>
            <button
              onClick={openContactModal}
              className="btn-success text-lg px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200"
            >
              Vamos Conversar!
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Contato */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}
