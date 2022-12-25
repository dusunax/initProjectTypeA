import Router from "./router/Router";

import { ThemeProvider } from "styled-components";
import * as theme from "./styles/theme.js";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme.defaultTheme}>
      <div className="app">
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
