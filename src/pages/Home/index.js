import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import NavContent from '../../components/NavContainer';
import Project from "../../components/Project";
import CreateProject from "../../components/CreateProject";

import Loading from '../../components/Loading';

import { Content, Projects } from './styles';

import { loadProjects, deleteProject, createProject } from './services';

import api from '../../services/api';

function Home({ history }) {

  useEffect(() => {
    const token = api.defaults.headers.Authorization;

    if(!token) return history.push("/login");
    const [, space] = token.split(' ');
    if(!space) return history.push("/login");
  })

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const loadProject = async () => {
    setLoading(true);
    try {
      const response = await loadProjects();
      setProjects(response.projects);
    } catch (err) {
      history.push("/login")
    } finally {
      setLoading(false);
    }
  }

  const onDeleteProject = useCallback(async (id) => {
    setLoading(true);
    try {
      await deleteProject(id);
      await loadProject();
    } catch (err) {
      history.push("/login")
    } finally {
      setLoading(false);
    }
  }, [])

  const onCreateProject = useCallback(async (name) => {
    setLoading(true);
    try {
      await createProject(name);
      await loadProject();
    } catch (err) {
      history.push("/login")
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    loadProject()
  }, [])

  return (
    <Content>
      <NavContent history={history}/>
      <Projects>
        <CreateProject onCreate={onCreateProject}/>

        {loading ? <Loading/> : projects.map(item =>
          (<Project name={item.name} id={item.id} key={item.id} onLoadProjects={loadProject} onDelete={onDeleteProject} />)
        )}

      </Projects>
    </Content>
  );
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
