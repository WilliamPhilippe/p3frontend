import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'

import { Content, FormContent } from './styles';

import Loading from '../../components/Loading';

import { createUser } from './services';

function New({ history }) {

  const { register, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    if(!data.username || !data.name || !data.password){
      return setErrorMessage('All fields are required.')
    }
    
    setLoading(true);
    setErrorMessage('')
    try {
      await createUser(data);
      history.push('/login');
    } catch (err) {
      setErrorMessage(err.response.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Content>
      <div className="container">
        <FormContent>
          <h5>Create your user</h5>
          {loading && <Loading />}
          <form onSubmit={handleSubmit(onSubmit)}>

          <input
              name="name"
              ref={register}
              id="icon_prefix"
              placeholder="name"
            />
              
            <input
              name="username"
              ref={register}
              id="icon_prefix"
              placeholder="username"
            />
        
            <input
              name="password"
              ref={register}
              id="password"
              type="password"
              placeholder="password"
            />
            
            {errorMessage && (
              <span className="error-text">
                {errorMessage}
              </span>
            )}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Entrar
            </button>
          </form>
          <Link to="/login">Login</Link>
        </FormContent>
      </div>
    </Content>
  );
}

export default New;
