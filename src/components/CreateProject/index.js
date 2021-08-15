import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'

import { Container } from './styles';

function CreateProject({onCreate}) {

  const { register, handleSubmit } = useForm();

  function onSubmit({name}) {
    onCreate(name);
  }

  return (
    <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create a new project</h2>

          <input 
            name="name"
            ref={register}
            placeholder="Project's name"
          />

            <button
              type="submit"
              name="action"
            >
              Create project
            </button>
        </form>
    </Container>
  );
}

CreateProject.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default CreateProject;