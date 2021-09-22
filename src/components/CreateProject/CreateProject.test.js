import React from 'react'


import CreateProject from './index'
import { screen, render} from "@testing-library/react"

describe('Verificar texto em Criar Projeto', () => {
  test('Deve haver Create a New Project', () => {
    render(<CreateProject onCreate={() => {}} />)

    const text1 = screen.getByText('Create a new project')

    expect(text1).toBeInTheDocument()
  })

  test('Deve iniciar Project\'s name', () => {
    render(<CreateProject onCreate={() => {}} />)

    const text1 = screen.getByPlaceholderText('Project\'s name')

    expect(text1).toBeInTheDocument()
  })

  test('Deve conter um form com um Botão', () => {
    render(<CreateProject onCreate={() => {}} />)

    const buttonSubmit = screen.getByRole('button', {type: "submit"})

    expect(buttonSubmit).toBeInTheDocument()
  })

})