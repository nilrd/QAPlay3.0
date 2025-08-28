'use client'

import { useState } from 'react'
import Image from 'next/image'
import ContactModal from '@/components/ContactModal'

export default function Curriculo() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  const experiences = [
    {
      company: 'Empresa de Tecnologia Financeira',
      position: 'Analista de Testes Sênior',
      period: '2023 - Atual',
      description: 'Liderança em testes de sistemas bancários críticos, implementação de automação com Selenium e Cypress, participação ativa em metodologias ágeis.',
      achievements: [
        'Reduziu tempo de testes em 60% com automação',
        'Implementou pipeline de CI/CD com testes automatizados',
        'Mentoria de 3 analistas júnior'
      ]
    },
    {
      company: 'E-commerce Nacional',
      position: 'Analista de Testes Pleno',
      period: '2021 - 2023',
      description: 'Responsável por testes funcionais e não funcionais em plataforma de e-commerce de alto volume, desenvolvimento de scripts de automação.',
      achievements: [
        'Criou suite de testes end-to-end completa',
        'Identificou e corrigiu 200+ bugs críticos',
        'Implementou testes de performance'
      ]
    },
    {
      company: 'Startup de Tecnologia',
      position: 'Analista de Testes Júnior',
      period: '2019 - 2021',
      description: 'Início da carreira em QA, foco em testes manuais e aprendizado de ferramentas de automação.',
      achievements: [
        'Desenvolveu primeiros scripts de automação',
        'Participou de 15+ releases de produto',
        'Certificação ISTQB Foundation Level'
      ]
    }
  ]

  const skills = {
    'Ferramentas de Automação': ['Selenium WebDriver', 'Cypress', 'Playwright', 'Postman'],
    'Linguagens de Programação': ['Java', 'JavaScript', 'TypeScript', 'Python'],
    'Frameworks de Teste': ['JUnit', 'TestNG', 'Cucumber', 'Jest'],
    'Metodologias': ['Scrum', 'Kanban', 'Shift-Left Testing', 'BDD/TDD'],
    'Ferramentas de CI/CD': ['Jenkins', 'GitHub Actions', 'GitLab CI'],
    'Bancos de Dados': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Ferramentas de Gestão': ['Jira', 'Qase', 'TestRail', 'Azure DevOps']
  }

  const certifications = [
    {
      name: 'ISTQB Foundation Level',
      issuer: 'International Software Testing Qualifications Board',
      year: '2020',
      credential: 'FL-2020-BR-001234'
    },
    {
      name: 'Selenium WebDriver Certification',
      issuer: 'Selenium Academy',
      year: '2021',
      credential: 'SWD-2021-5678'
    },
    {
      name: 'Agile Testing Certification',
      issuer: 'Scrum Alliance',
      year: '2022',
      credential: 'ATC-2022-9012'
    }
  ]

  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia de São Paulo',
      period: '2017 - 2019',
      status: 'Concluído'
    },
    {
      degree: 'Curso Técnico em Informática',
      institution: 'ETEC São Paulo',
      period: '2015 - 2017',
      status: 'Concluído'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <Image
            src="/logo-qaplay.png"
            alt="Nilson da Silva Brites"
            width={150}
            height={150}
            className="mx-auto mb-6 rounded-full"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            Nilson da Silva Brites
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Analista de Testes QA Sênior
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Profissional especializado em Quality Assurance com mais de 5 anos de experiência em testes manuais e automatizados, 
            metodologias ágeis e liderança técnica em projetos de alta complexidade.
          </p>
          <button
            onClick={openContactModal}
            className="btn-primary text-lg px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200"
          >
            Entre em Contato
          </button>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
            Experiência Profissional
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.position}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                  </div>
                  <span className="badge badge-info text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">Principais Conquistas:</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card">
                <h3 className="text-lg font-bold text-green-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="badge badge-success text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
            Certificações
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{cert.name}</h3>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-2">Ano: {cert.year}</p>
                <p className="text-xs text-gray-500">ID: {cert.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Formação Acadêmica
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-green-400 mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.period}</p>
                  </div>
                  <span className="badge badge-success text-sm mt-2 md:mt-0">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades de crescimento. 
            Entre em contato para discutirmos como posso contribuir com seu projeto.
          </p>
          <button
            onClick={openContactModal}
            className="btn-success text-lg px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200"
          >
            Fale Comigo
          </button>
        </div>
      </section>

      {/* Modal de Contato */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

