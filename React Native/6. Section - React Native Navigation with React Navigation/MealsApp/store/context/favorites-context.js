import { createContext } from "react";

export const FavoritesContext = createContext({
    ids: []
})

function FavoritesContextProvider({ children }) {
    return <FavoritesContext.Provider value={null}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;