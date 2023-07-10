import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import './TodoPlanDetail.css'

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
        <div className='container'>
            <div className='plan-name'>
                <h3>{plan.name}</h3>
            </div>
            <div className='plan-author'>
                <p>Created by: {plan.get_username}</p>
            </div>

            <div className='table-container'>
                <table className='table-todo'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {plan.todo && plan.todo.map((todo) => (
                            <tr key={todo.id}>
                                <td></td>
                                <td className={todo.completed ? 'true' : 'false'}>{todo.id}</td>
                                <td className={todo.completed ? 'true' : 'false'}>{todo.name}</td>
                                <td className={todo.completed ? 'true' : 'false'}>{todo.description}</td>
                                <td className={todo.completed ? 'true' : 'false'}>{todo.category.join(', ')}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                {plan.todo && plan.todo.map((todo) => (
                    <h2 key={todo.id}>Todo: {todo.name}</h2>
                ))}
            </div>
            <ul>
                {plan.todo && plan.todo.map((todo) => (
                    <li key={todo.id}>
                        <h4>{todo.name}</h4>
                        <p>Completed: {todo.completed === 'true' ? 'Completed' : 'Not Completed'}</p>
                        <p>
                            Category: {todo.category.join(', ')}
                        </p>
                        <h4>{todo.description}</h4>
                        <h4>Tasks:</h4>
                        <ul>
                            {todo.task && todo.task.map((task) => (
                                <li key={task.id}>
                                    <p>{task.name}</p>
                                    <p>{task.description}</p>
                                    <p>Completed: {plan.completed ? 'Completed' : 'Not Completed'}</p>
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