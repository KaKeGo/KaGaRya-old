import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import { fetchTodoPlanDetail } from '../../slices/Todo/TodoPlanDetail';


const TodoPlanDetail = () => {
    const { slug } = useParams()
    const plan = useSelector((state) => state.todoPlanDetail.plan)
    const loading = useSelector((state) => state.todoPlanDetail.loading)
    const error = useSelector((state) => state.todoPlanDetail.error)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodoPlanDetail(slug))
    }, [dispatch, slug])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    
    return (
        <div>
            <h2>Plan name:
                <b> {plan.name}</b>
            </h2>
            <p>Created by: {plan.get_username}</p>

            <h3>Todo:</h3>
            <ul>
                {plan.todo.map((todo) => (
                    <li key={todo.id}>
                        <h4>{todo.name}</h4>
                        <p>
                            Category: {todo.category.join(', ')}
                        </p>
                        <h4>{todo.description}</h4>
                        <h4>Tasks:</h4>
                        <ul>
                            {todo.task.map((task) => (
                                <li key={task.id}>
                                    <p>{task.name}</p>
                                    <p>{task.description}</p>
                                    <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoPlanDetail