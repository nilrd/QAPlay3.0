import { render, screen, fireEvent } from '@testing-library/react'
import ContactModal from '../ContactModal'

describe('ContactModal Component', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('does not render when isOpen is false', () => {
    render(<ContactModal isOpen={false} onClose={mockOnClose} />)
    
    expect(screen.queryByText('Entre em Contato')).not.toBeInTheDocument()
  })

  it('renders when isOpen is true', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    
    expect(screen.getByText('Entre em Contato')).toBeInTheDocument()
    expect(screen.getByText('Escolha a melhor forma de entrar em contato comigo:')).toBeInTheDocument()
  })

  it('renders all contact links', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    
    const closeButton = screen.getByRole('button', { name: /fechar modal/i })
    fireEvent.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay is clicked', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    
    const overlay = screen.getByText('Entre em Contato').closest('.modal-overlay')
    if (overlay) {
      fireEvent.click(overlay)
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    }
  })

  it('displays QA Play attribution', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    
    expect(screen.getByText('QA Play')).toBeInTheDocument()
    expect(screen.getByText('Criado por Nilson da Silva Brites')).toBeInTheDocument()
    expect(screen.getByText('Incluindo testes manuais e automatizados')).toBeInTheDocument()
  })
})

