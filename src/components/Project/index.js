import React, { useCallback, useEffect, useState } from 'react';
import {MdDelete, MdModeEdit, MdClose} from 'react-icons/md';
import Proptypes from 'prop-types'

import Task from '../Task';
import { Container, Header, TasksContent, Footer } from './styles';

import { listTasks, createTask, updateProject } from './services';
import Loading  from '../Loading';

function Project({name, id, onDelete, onLoadProjects}) {

  const [tasksChecked, setTasksChecked] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [newTask, setNewTask] = useState('');

  const loadTasks = async () => {
    setLoading(true);
    try {
      const response = await listTasks(id);

      const checkeds = [];
      const unCheckeds = [];

      response.forEach(item => 
        item.finished ? checkeds.push(item) : unCheckeds.push(item)
      )

      setTasks(unCheckeds);
      setTasksChecked(checkeds);
    } catch (err) {
        console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const onCreateTask = useCallback(async (description) => {
    setLoading(true);

    try {
      await createTask(description, id);
      setNewTask('');
      await loadTasks();
    }
    catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    
  }, [id])

  const [showUpdate, setShowUpdate] = useState(false);
  const [newName, setNewName] = useState(name);

  const onUpdateProject = useCallback(async (name) => {
    setLoading(true);

    try {
      await updateProject(name, id);
      await onLoadProjects();
    }
    catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
      loadTasks();
  }, [])

  return (
    <Container>
        <Header>
            <div className="left">
              {showUpdate ? 
                (
                  <>
                    <input value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <button onClick={() => onUpdateProject(newName)}>save</button>
                  </>
                ) : 
                (<h3>{name}</h3>)}
            </div>

            {!showUpdate ? (<div className="right">
                <MdModeEdit onClick={() => setShowUpdate(!showUpdate)} color="#077FB3"/>
                <MdDelete onClick={() => onDelete(id)} color="#9B0E0E"/>
            </div> ) : (
              <div className="right">
                <MdClose onClick={() => {setShowUpdate(!showUpdate)}} />
              </div>
            )}

        </Header>
        <TasksContent>
            {loading && <Loading/>}
            <h3>To Do</h3>
            <ul>
                {tasks.map(item => <Task key={item.id} item={item} onLoadTasks={loadTasks} />)}
            </ul>
            <h3>Done</h3>
            <ul>
                {tasksChecked.map(item => <Task key={item.id} item={item} onLoadTasks={loadTasks} />)}
            </ul>
        </TasksContent>
        <Footer>
            <input 
                placeholder="New task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={() => onCreateTask(newTask)}>
                save
            </button>
        </Footer>    
    </Container>
  );
}

Project.propTypes = {
    name: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
    onDelete: Proptypes.func.isRequired,
    onLoadProjects: Proptypes.func.isRequired,
};

export default Project;