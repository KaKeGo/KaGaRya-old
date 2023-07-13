import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import './TodoPlanDetail.css'

import { fetchTodoPlanDetail } from '../../slices/Todo/TodoPlanDetail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons'


const TodoPlanDetail = () => {
    const { slug } = useParams()
    const plan = useSelector((state) => state.todoPlanDetail.plan)
    const loading = useSelector((state) => state.todoPlanDetail.loading)
    const error = useSelector((state) => state.todoPlanDetail.error)
    const dispatch = useDispatch()

    const [expandedTodo, setExpandedTodo] = useState([])

    const handleExpandTasks = (todoId) => {
        if (expandedTodo.includes(todoId)) {
            setExpandedTodo(expandedTodo.filter((id) => id !== todoId))
        } else {
            setExpandedTodo([...expandedTodo, todoId])
        }
    }

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
                    <th></th>
                </tr>
                </thead>


                <tbody>
                {plan.todo && plan.todo.map((todo) => (
                <>
                <tr key={todo.id}>

                    <td></td>
                    <td className={todo.completed ? 'true' : 'false'}>{todo.id}</td>
                    <td className={todo.completed ? 'true' : 'false'}>{todo.name}</td>
                    <td className={todo.completed ? 'true' : 'false'}>{todo.description}</td>
                    <td className={todo.completed ? 'true' : 'false'}>{todo.category.join(', ')}</td>
                    <td>
                        <button
                            className="expand-button"
                            onClick={() => handleExpandTasks(todo.id)}
                        >
                            {expandedTodo.includes(todo.id) ? (
                                <FontAwesomeIcon icon={faAnglesDown} rotation={180}/>
                            ) : (
                                <FontAwesomeIcon icon={faAnglesDown} beatFade/>
                            )
                        }
                        </button>
                    </td>
                    <td></td>

                </tr>

                {expandedTodo.includes(todo.id) && (
                <>
                <tr>
                    <th></th>
                    <th></th>
                    <th style={{fontSize: '12px'}}>Name</th>
                    <th style={{fontSize: '12px'}}>Description</th>
                    <th style={{fontSize: '12px'}}>Completed</th>
                    <th></th>
                </tr>

                {todo.task && todo.task.map((task) => (
                
                <>
                    <tr key={task.id}>
                        <td></td>
                        <td></td>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td className={`icon ${task.completed ? 'true' : 'false'}`}></td>
                        <td></td>
                    </tr>
                </>

                ))}
                </>
                )}
                </>
                    
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default TodoPlanDetail