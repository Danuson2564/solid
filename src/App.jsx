import Home from "./routes/Home";
import { Route, Router } from "@solidjs/router";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Router root={MainLayout}>
          <Route path="/" component={Home} />
        </Router>
      </MainLayout>
    </>
  );
}

export default App;