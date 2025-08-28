'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Introdução ao Shift-Left Testing: Por que Testar Mais Cedo?',
    excerpt: 'Descubra como a abordagem Shift-Left pode revolucionar sua estratégia de testes e reduzir custos de desenvolvimento.',
    content: `O Shift-Left Testing é uma abordagem que visa mover as atividades de teste para as fases iniciais do ciclo de desenvolvimento de software. Esta metodologia tem ganhado cada vez mais relevância no cenário atual de desenvolvimento ágil.

## Por que Shift-Left?

O conceito de "shift-left" vem da representação visual do ciclo de desenvolvimento, onde as fases iniciais ficam à esquerda. Ao mover os testes para a esquerda, conseguimos:

- **Detecção Precoce de Defeitos**: Bugs encontrados nas fases iniciais custam muito menos para corrigir
- **Melhoria na Qualidade**: Testes contínuos garantem maior qualidade do produto final
- **Redução de Custos**: Correções tardias podem custar até 100x mais que correções precoces

## Implementando Shift-Left

Para implementar com sucesso, considere:

1. **Envolvimento da Equipe de QA desde o Planejamento**
2. **Automação de Testes Unitários e de Integração**
3. **Revisões de Código Focadas em Testabilidade**
4. **Testes de Requisitos e Design**

## Ferramentas Essenciais

- **Selenium** para automação web
- **Jest** para testes unitários JavaScript
- **Postman** para testes de API
- **SonarQube** para análise de código

O Shift-Left Testing não é apenas uma metodologia, é uma mudança cultural que coloca a qualidade no centro do desenvolvimento.`,
    author: 'Nilson da Silva Brites',
    date: '2024-01-15',
    category: 'Metodologias',
    readTime: '5 min',
    tags: ['Shift-Left', 'Metodologias', 'Qualidade', 'Automação']
  },
  {
    id: 2,
    title: 'Selenium vs Cypress vs Playwright: Qual Escolher em 2024?',
    excerpt: 'Comparação detalhada das principais ferramentas de automação de testes web e quando usar cada uma.',
    content: `A escolha da ferramenta de automação certa pode fazer toda a diferença no sucesso do seu projeto. Vamos analisar as três principais opções do mercado.

## Selenium WebDriver

**Prós:**
- Suporte a múltiplas linguagens (Java, Python, C#, JavaScript)
- Comunidade muito ativa e madura
- Compatibilidade com todos os navegadores
- Flexibilidade máxima

**Contras:**
- Configuração mais complexa
- Testes podem ser instáveis (flaky)
- Curva de aprendizado mais íngreme

## Cypress

**Prós:**
- Execução rápida e confiável
- Debugging excelente
- Sintaxe moderna e intuitiva
- Time travel debugging

**Contras:**
- Limitado ao JavaScript
- Não suporta múltiplas abas
- Apenas Chromium e Firefox

## Playwright

**Prós:**
- Suporte nativo a múltiplos navegadores
- Execução paralela eficiente
- Auto-wait inteligente
- Suporte a mobile

**Contras:**
- Comunidade menor
- Documentação ainda em crescimento
- Curva de aprendizado moderada

## Recomendações

- **Selenium**: Para projetos legados ou quando precisar de máxima flexibilidade
- **Cypress**: Para aplicações web modernas com foco em JavaScript
- **Playwright**: Para novos projetos que precisam de performance e confiabilidade

A escolha depende do contexto do seu projeto, equipe e requisitos específicos.`,
    author: 'Nilson da Silva Brites',
    date: '2024-01-10',
    category: 'Ferramentas',
    readTime: '7 min',
    tags: ['Selenium', 'Cypress', 'Playwright', 'Automação', 'Comparação']
  },
  {
    id: 3,
    title: 'Testes de API: Guia Completo com Postman e Newman',
    excerpt: 'Aprenda a criar, executar e automatizar testes de API eficientes usando Postman e Newman.',
    content: `Os testes de API são fundamentais para garantir a qualidade de aplicações modernas. Vamos explorar como usar o Postman e Newman para criar uma estratégia robusta.

## Por que Testar APIs?

APIs são o backbone das aplicações modernas. Testes de API oferecem:

- **Feedback Rápido**: Testes mais rápidos que testes de UI
- **Cobertura Ampla**: Testam a lógica de negócio diretamente
- **Estabilidade**: Menos sujeitos a mudanças de interface

## Configurando o Postman

### 1. Criando Collections
Organize seus testes em collections lógicas:
- Autenticação
- CRUD Operations
- Edge Cases
- Performance Tests

### 2. Usando Variáveis
- **Environment Variables**: Para diferentes ambientes
- **Global Variables**: Para dados compartilhados
- **Collection Variables**: Para dados específicos da collection

### 3. Scripts de Teste
\`\`\`javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has user data", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('user');
});
\`\`\`

## Automatização com Newman

Newman permite executar collections via linha de comando:

\`\`\`bash
newman run collection.json -e environment.json --reporters cli,html
\`\`\`

## Integração CI/CD

Integre com Jenkins, GitHub Actions ou GitLab CI:

\`\`\`yaml
- name: Run API Tests
  run: newman run postman_collection.json -e production.json
\`\`\`

## Boas Práticas

1. **Organize por Funcionalidade**
2. **Use Data-Driven Testing**
3. **Implemente Testes Negativos**
4. **Monitore Performance**
5. **Documente Cenários**

Testes de API bem estruturados são a base para uma estratégia de qualidade sólida.`,
    author: 'Nilson da Silva Brites',
    date: '2024-01-05',
    category: 'Automação',
    readTime: '8 min',
    tags: ['API Testing', 'Postman', 'Newman', 'Automação', 'CI/CD']
  }
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')

  const categories = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  
  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <article className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Botão Voltar */}
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Blog
            </button>

            {/* Header do Artigo */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge badge-info">{selectedPost.category}</span>
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="badge badge-success text-xs">{tag}</span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                <span>Por {selectedPost.author}</span>
                <span>•</span>
                <span>{new Date(selectedPost.date).toLocaleDateString('pt-BR')}</span>
                <span>•</span>
                <span>{selectedPost.readTime} de leitura</span>
              </div>
            </header>

            {/* Conteúdo do Artigo */}
            <div className="card">
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: selectedPost.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n/g, '<br>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    .replace(/## (.*?)<\/p>/g, '<h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">$1</h2>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-400">$1</strong>')
                    .replace(/- \*\*(.*?)\*\*/g, '<li><strong class="text-green-400">$1</strong>')
                    .replace(/- (.*?)<br>/g, '<li>$1</li>')
                    .replace(/```(\w+)\n(.*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="language-$1">$2</code></pre>')
                    .replace(/`(.*?)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-blue-300">$1</code>')
                }}
              />
            </div>

            {/* Footer do Artigo */}
            <footer className="mt-12 p-6 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo-qaplay.png"
                  alt="Nilson da Silva Brites"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-blue-400">Nilson da Silva Brites</h3>
                  <p className="text-gray-300 text-sm">
                    Analista de Testes QA Sênior especializado em automação e metodologias ágeis. 
                    Criador do QA Play, plataforma de treinamento em Quality Assurance.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <Image
            src="/logo-qaplay.png"
            alt="QA Play Blog"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            Blog QA Play
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Artigos, tutoriais e insights sobre Quality Assurance, automação de testes e metodologias ágeis. 
            Compartilhando conhecimento para elevar a qualidade do software.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="card hover:scale-102 transition-all duration-200 cursor-pointer">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-info">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 
                  className="text-2xl font-bold mb-4 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span>Por {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Ler mais →
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="badge badge-success text-xs">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Nenhum artigo encontrado para a categoria &ldquo;{selectedCategory}&rdquo;.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Quer Aprender Mais sobre QA?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore nossos quizzes interativos e teste seus conhecimentos em Quality Assurance.
          </p>
          <Link
            href="/qa-training"
            className="btn-success text-lg px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 inline-block"
          >
            Começar Treinamento
          </Link>
        </div>
      </section>
    </div>
  )
}

