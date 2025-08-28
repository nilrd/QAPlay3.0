'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  category: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Qual é o principal objetivo do teste de software?',
    options: [
      'Provar que o software não tem bugs',
      'Encontrar todos os defeitos no software',
      'Reduzir o risco de falhas em produção',
      'Garantir que o software está 100% correto'
    ],
    correct: 2,
    explanation: 'O principal objetivo do teste é reduzir o risco de falhas em produção, não provar a ausência de defeitos.',
    category: 'Fundamentos'
  },
  {
    id: 2,
    question: 'O que significa "Shift-Left Testing"?',
    options: [
      'Mover os testes para a esquerda na tela',
      'Começar os testes mais cedo no ciclo de desenvolvimento',
      'Usar ferramentas de teste do lado esquerdo',
      'Testar apenas funcionalidades básicas'
    ],
    correct: 1,
    explanation: 'Shift-Left Testing significa começar as atividades de teste mais cedo no ciclo de desenvolvimento para detectar defeitos precocemente.',
    category: 'Metodologias'
  },
  {
    id: 3,
    question: 'Qual ferramenta é mais adequada para testes de API?',
    options: [
      'Selenium WebDriver',
      'Cypress',
      'Postman',
      'JUnit'
    ],
    correct: 2,
    explanation: 'Postman é uma ferramenta especializada em testes de API, oferecendo recursos específicos para esse tipo de teste.',
    category: 'Ferramentas'
  },
  {
    id: 4,
    question: 'O que é BDD (Behavior Driven Development)?',
    options: [
      'Uma linguagem de programação',
      'Uma metodologia que foca no comportamento do software',
      'Uma ferramenta de automação',
      'Um tipo de banco de dados'
    ],
    correct: 1,
    explanation: 'BDD é uma metodologia que foca na definição do comportamento do software através de cenários escritos em linguagem natural.',
    category: 'Metodologias'
  },
  {
    id: 5,
    question: 'Qual é a diferença entre verificação e validação?',
    options: [
      'Não há diferença, são sinônimos',
      'Verificação é "estamos construindo certo?" e Validação é "estamos construindo a coisa certa?"',
      'Verificação é manual e Validação é automatizada',
      'Verificação é para bugs e Validação é para performance'
    ],
    correct: 1,
    explanation: 'Verificação pergunta se estamos construindo o produto corretamente, enquanto Validação pergunta se estamos construindo o produto correto.',
    category: 'Fundamentos'
  }
]

export default function QATraining() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userAnswers, setUserAnswers] = useState<number[]>([])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const newUserAnswers = [...userAnswers, selectedAnswer]
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
    setUserAnswers([])
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return { message: 'Excelente! Você domina os conceitos de QA!', color: 'text-green-400' }
    if (percentage >= 60) return { message: 'Bom trabalho! Continue estudando para aprimorar seus conhecimentos.', color: 'text-blue-400' }
    return { message: 'Continue estudando! A prática leva à perfeição em QA.', color: 'text-yellow-400' }
  }

  if (quizCompleted) {
    const scoreMessage = getScoreMessage()
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="card max-w-2xl w-full text-center">
          <Image
            src="/logo-qaplay.png"
            alt="QA Play Logo"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-6 text-blue-400">Quiz Concluído!</h1>
          <div className="text-6xl font-bold mb-4 text-green-400">
            {score}/{quizQuestions.length}
          </div>
          <p className="text-xl mb-6">
            Você acertou {score} de {quizQuestions.length} questões ({Math.round((score / quizQuestions.length) * 100)}%)
          </p>
          <p className={`text-lg mb-8 ${scoreMessage.color}`}>
            {scoreMessage.message}
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Revisão das Respostas:</h3>
            <div className="space-y-3 text-left">
              {quizQuestions.map((question, index) => (
                <div key={question.id} className="bg-gray-800 p-3 rounded">
                  <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={userAnswers[index] === question.correct ? 'text-green-400' : 'text-red-400'}>
                      Sua resposta: {question.options[userAnswers[index]]}
                    </span>
                    {userAnswers[index] !== question.correct && (
                      <span className="text-green-400">
                        Correto: {question.options[question.correct]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="btn-primary px-6 py-3 rounded-lg font-semibold"
            >
              Tentar Novamente
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="btn-secondary px-6 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700"
            >
              Voltar ao Início
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-400/20">
            <p className="text-sm text-gray-300">
              <strong className="text-blue-400">QA Play</strong> - Criado por Nilson da Silva Brites
              <br />
              <span className="text-xs text-gray-400">
                Plataforma de treinamento em Quality Assurance
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header do Quiz */}
      <div className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-qaplay.png"
                alt="QA Play Logo"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold text-blue-400">QA Training</h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Questão {currentQuestion + 1} de {quizQuestions.length}</div>
              <div className="text-sm text-gray-400">Pontuação: {score}</div>
            </div>
          </div>
          
          {/* Barra de Progresso */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Conteúdo do Quiz */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card">
            {/* Categoria */}
            <div className="mb-6">
              <span className="badge badge-info text-sm">
                {question.category}
              </span>
            </div>

            {/* Pergunta */}
            <h2 className="text-2xl font-bold mb-8 text-white leading-relaxed">
              {question.question}
            </h2>

            {/* Opções */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === question.correct
                          ? 'border-green-400 bg-green-900/20 text-green-400'
                          : 'border-red-400 bg-red-900/20 text-red-400'
                        : 'border-blue-400 bg-blue-900/20'
                      : showExplanation && index === question.correct
                      ? 'border-green-400 bg-green-900/20 text-green-400'
                      : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-102'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showExplanation && index === question.correct && (
                      <span className="text-green-400">✓</span>
                    )}
                    {showExplanation && selectedAnswer === index && index !== question.correct && (
                      <span className="text-red-400">✗</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explicação */}
            {showExplanation && (
              <div className="mb-8 p-4 bg-blue-900/20 rounded-lg border border-blue-400/20">
                <h3 className="font-bold text-blue-400 mb-2">Explicação:</h3>
                <p className="text-gray-300 leading-relaxed">{question.explanation}</p>
              </div>
            )}

            {/* Botões de Ação */}
            <div className="flex justify-between">
              <button
                onClick={() => window.location.href = '/'}
                className="btn-secondary px-6 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700"
              >
                Sair do Quiz
              </button>
              
              {!showExplanation ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedAnswer !== null
                      ? 'btn-primary hover:scale-105'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="btn-success px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                </button>
              )}
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <strong className="text-blue-400">QA Play</strong> - Treinamento interativo criado por Nilson da Silva Brites
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

