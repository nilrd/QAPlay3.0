'use client'

import { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const contactLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nilsondasilvabrites/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Conecte-se comigo no LinkedIn',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/nilrd',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Veja meus projetos no GitHub',
      color: 'text-gray-400 hover:text-gray-300'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5511999999999?text=Olá%20Nilson,%20vim%20do%20QA%20Play%20e%20gostaria%20de%20conversar!',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
        </svg>
      ),
      description: 'Converse comigo no WhatsApp',
      color: 'text-green-400 hover:text-green-300'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/nilsonbrites',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 00-1.852 1.207A5.105 5.105 0 00.962 5.019C.73 5.519.608 6.093.574 7.041.539 7.989.526 8.396.526 12.017s.013 4.028.048 4.976c.034.948.156 1.522.43 2.022.225.722.6 1.334 1.207 1.852a5.105 5.105 0 001.852 1.207c.5.226 1.074.348 2.022.43.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.948-.034 1.522-.156 2.022-.43a5.105 5.105 0 001.852-1.207 5.105 5.105 0 001.207-1.852c.226-.5.348-1.074.43-2.022.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.948-.156-1.522-.43-2.022a5.105 5.105 0 00-1.207-1.852A5.105 5.105 0 0019.998.43C19.498.204 18.924.082 17.976.048 17.028.013 16.621 0 12.017 0zm0 2.165c3.573 0 3.994.014 5.402.048.874.034 1.35.142 1.666.236.419.163.717.358 1.031.672.314.314.509.612.672 1.031.094.316.202.792.236 1.666.034 1.408.048 1.829.048 5.402s-.014 3.994-.048 5.402c-.034.874-.142 1.35-.236 1.666-.163.419-.358.717-.672 1.031a2.78 2.78 0 01-1.031.672c-.316.094-.792.202-1.666.236-1.408.034-1.829.048-5.402.048s-3.994-.014-5.402-.048c-.874-.034-1.35-.142-1.666-.236a2.78 2.78 0 01-1.031-.672 2.78 2.78 0 01-.672-1.031c-.094-.316-.202-.792-.236-1.666-.034-1.408-.048-1.829-.048-5.402s.014-3.994.048-5.402c.034-.874.142-1.35.236-1.666.163-.419.358-.717.672-1.031a2.78 2.78 0 011.031-.672c.316-.094.792-.202 1.666-.236 1.408-.034 1.829-.048 5.402-.048z"/>
          <path d="M12.017 15.33a3.312 3.312 0 110-6.624 3.312 3.312 0 010 6.624zM12.017 7.052a4.963 4.963 0 100 9.926 4.963 4.963 0 000-9.926zM18.495 6.831a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z"/>
        </svg>
      ),
      description: 'Siga-me no Instagram',
      color: 'text-pink-400 hover:text-pink-300'
    },
    {
      name: 'Email',
      href: 'mailto:nilson.brites@example.com?subject=Contato%20via%20QA%20Play&body=Olá%20Nilson,%0A%0AVim%20do%20QA%20Play%20e%20gostaria%20de%20conversar%20sobre...',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      description: 'Envie-me um email',
      color: 'text-yellow-400 hover:text-yellow-300'
    },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-qaplay-blue">Entre em Contato</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
            aria-label="Fechar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 text-center">
            Escolha a melhor forma de entrar em contato comigo:
          </p>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 ${link.color} group`}
              >
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-current transition-colors duration-200">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    {link.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 p-4 bg-qaplay-blue/10 rounded-lg border border-qaplay-blue/20">
            <p className="text-sm text-gray-300 text-center">
              <strong className="text-qaplay-blue">QA Play</strong> - Criado por Nilson da Silva Brites
              <br />
              <span className="text-xs text-gray-400">
                Incluindo testes manuais e automatizados
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

