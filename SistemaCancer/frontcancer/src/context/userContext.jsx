import { useContext, useState, createContext, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const UsersContext = createContext(null);

export const useuserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a NavContextProvider");
  }
  return context;
};

export const Usercontextprovider = ({ children }) => {
  const token = getCookie("token");
  const [user, setUser] = useState({ isLogged: !!token });
  const navegate = useNavigate();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const obj = {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        telefono: user.telefono,
        rol: user.rol,
        isLogged: true,
      };
      setUser(obj);
    } else {
      navegate("/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UsersContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </UsersContext.Provider>
  );
};
