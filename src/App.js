import Layout from "./layout/Layout";

import Patch from './routes/Patch'
import PrivateRoute from "./routes/PrivateRoute";



function App() {
  return (
    <div className="App">
      <Layout>
          <Patch />
          <PrivateRoute />
      </Layout>
    </div>
  );
}

export default App;
