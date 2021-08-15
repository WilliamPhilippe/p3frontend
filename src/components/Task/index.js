import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types'
import {MdDelete} from 'react-icons/md'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Loading from '../Loading'

import { Container } from './styles';
import { deleteTask, checkTask } from './services'

function Task({item, onLoadTasks}) {

    const formattedDate = useMemo(() => {
        const date = new Date(item.finished ? item.finished_at : item.created_at);
        const text = item.finished ? 'finished at ' : 'created at '
        return text + date.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
    }, [item])

    const [loading, setLoading] = useState(false);
    const onCheckTask = useCallback(async () => {
        setLoading(true);
        try {
            await checkTask(item.id);
            await onLoadTasks();
          }
          catch(err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
          
    }, [item]);

    const onDeleteTask = useCallback(async () => {
        setLoading(true);
        try {
            await deleteTask(item.id);
            await onLoadTasks();
          }
          catch(err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
    }, [item])

    return (
        <Container >
                {loading && <Loading/> }
                
                {!item.finished && <input type="checkbox" onChange={() => onCheckTask()} />}
            <Tippy content={formattedDate}>
                <span>{item.description}</span>
            </Tippy>

                {!item.finished && <MdDelete onClick={() => onDeleteTask()} color="#9999"/>}
        </Container>
    );
}

Task.propTypes = {
    item: PropTypes.shape(
        {
            finished: PropTypes.bool,
            finished_at: PropTypes.string,
            description: PropTypes.string,
            created_at: PropTypes.string,
            id: PropTypes.string
        }
    ).isRequired,
    onLoadTasks: PropTypes.func.isRequired,
}

export default Task;