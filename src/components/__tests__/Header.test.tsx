import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  it('renders QA Play logo and title', () => {
    render(<Header />)
    
    expect(screen.getByText('QA Play')).toBeInTheDocument()
    expect(screen.getByText('por Nilson S Brites')).toBeInTheDocument()
    expect(screen.getByAltText('QA Play Logo')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Meu Currículo')).toBeInTheDocument()
    expect(screen.getByText('QA Training')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button', { name: /abrir menu principal/i })
    
    // Menu should be closed initially
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    
    // Click to open menu
    fireEvent.click(menuButton)
    
    // Menu should be visible now (mobile links)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThan(1) // Desktop + Mobile
  })

  it('has correct href attributes for navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /qa play/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Meu Currículo' })).toHaveAttribute('href', '/curriculo')
    expect(screen.getByRole('link', { name: 'QA Training' })).toHaveAttribute('href', '/qa-training')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
  })
})

