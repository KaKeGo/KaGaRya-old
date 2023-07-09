import Layout from "./layout/Layout";
import { Routes, Route } from 'react-router-dom'


import Home from './content/Home/Home'
import NotFound from './content/NotFound/NotFound'
import ProfileList from "./content/ProfileList/ProfileList";
import Login from "./content/Login/Login";
import Register from "./content/Register/Register";
import TodoPlanList from "./content/Todo/TodoPlanList";
import TodoPlanDetail from "./content/Todo/TodoPlanDetail";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path="/profile/list" element={<ProfileList />}/>
          <Route path="/todo/plan/list" element={<TodoPlanList />}/>
          <Route path="/todo/plan/:slug" element={<TodoPlanDetail />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
