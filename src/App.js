import { Header } from "./Components/Header";
import { DialogProvider } from "react-mui-dialog";

import Calendar from "./Components/Calendar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <DialogProvider>
        <Header />
        <Calendar />
      </DialogProvider>
    </Provider>
  );
}

export default App;
