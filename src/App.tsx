import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { UserDataProvider } from "./contexts/userContext";


const App = () => {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserDataProvider>

  )
}

export default App;