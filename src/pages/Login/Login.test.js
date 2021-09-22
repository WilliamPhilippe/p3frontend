import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Login from './index'
import { sendLogin } from './services'

import { screen, render, fireEvent } from "@testing-library/react"


describe('Verificar textos no login', () => {
  test('Deve haver os título', () => {
    render(<BrowserRouter><Login /></BrowserRouter>)
    const text1 = screen.getByText('Your ToDo List')
    expect(text1).toBeInTheDocument()   
  })

  test('Deve haver o botão', () => {
    render(<BrowserRouter><Login /></BrowserRouter>)
    const buttonSubmit = screen.getByRole(
      'button', {type: "submit" }
    )
    expect(buttonSubmit).toBeInTheDocument()
  })

  test('Deve haver os inputs', () => {
    render(<BrowserRouter><Login /></BrowserRouter>)
    const inputUsername = screen.getByPlaceholderText('username')
    expect(inputUsername).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText('password')
    expect(inputPassword).toBeInTheDocument()
  })
})


describe('LoginForm Service', () => {
  test('Deve fazer o login sem erros', async () => {
    const username = "WilliamTest"
    const password = "123"

    let data;

    data = await sendLogin({username, password})
    
    expect(data.user.id).not.toBeUndefined()
  })

  test('Deve dar erro no login', async () => {
    const username = "WilliamTest"
    const password = "senha errada"

    let error;

    try {
      await sendLogin({username, password})
    }
    catch(err) {
      error = err;
    }
    
    expect(error).not.toBeNull()
    expect(error).not.toBeUndefined()
  })

  test('Deve ser chamada após clicar em login', () => {
    const component = render(<BrowserRouter><Login /></BrowserRouter>)
    const userNameInput = component.getByPlaceholderText('username')
    const passwordInput = component.getByPlaceholderText('password')
    const buttonSubmit = component.getByRole('button', {type: 'submit'})
    
    fireEvent.change(userNameInput, { target: { value: 'Errado'}})

    expect(userNameInput.value).toMatch('Errado')
  
    // fireEvent.submit(buttonSubmit)

    // const errorSpan = component.getByText('Errorr')

    // expect(errorSpan).toBeInTheDocument()
  })

  test('onSubmit should be called', () => {
    const component = shallow(<BrowserRouter><Login /></BrowserRouter>)

  })
})