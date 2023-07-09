import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchTodoPlan } from '../../slices/Todo/todoPlanList'

const TodoPlanList = () => {
  const plans = useSelector((state) => state.todoPlan.plan)
  const loading = useSelector((state) => state.todoPlan.loading)
  const error = useSelector((state) => state.todoPlan.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoPlan())
  }, [dispatch])

  if (loading) {
    return<div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>TodoPlanList</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <Link to={`/todo/plan/${plan.slug}`}>
              <b>{plan.name}</b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPlanList