import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [isAuth, setAuthState] = React.useState(undefined);

  //ComponentDidMount
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) setAuthState(true);
    else setAuthState(false);
  }, []);

  //
  const values = React.useMemo(() => (
    {
      isAuth,      // States que seran visibles en el contexto.
      setAuthState,   // Funciones que son exportadas para manejo externo.
    }),
    [
      isAuth]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;