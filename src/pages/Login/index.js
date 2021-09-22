import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

import { Content, FormContent } from './styles';

import Loading from '../../components/Loading';

import { sendLogin } from './services';

function Login({ history }) {

  const { register, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    setErrorMessage('')
    try {
      await sendLogin(data);
      history.push('/');
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
          <h5>Your ToDo List</h5>
          {loading && <Loading />}
          <form onSubmit={handleSubmit(onSubmit)}>
              
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
                {/* {errorMessage} */}
                Errorr
              </span>
            )}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Send
            </button>
          </form>
          <Link to="/new">Sign in</Link>
        </FormContent>
      </div>
    </Content>
  );
}

export default Login;
