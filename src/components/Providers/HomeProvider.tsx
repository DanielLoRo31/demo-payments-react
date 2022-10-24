import React, { ReactNode, useCallback, useState } from "react";
import { IClient } from "../../entities/IClient";
import { getClients } from "../../services/api";

export interface IHomeContext {
  clients: IClient[];
  loadClients?: () => Promise<void>;
  error?: Error;
}

const initialValue: IHomeContext = {
  clients: [],
};

export const HomeContext = React.createContext(initialValue);
HomeContext.displayName = "homeContext";
export const useHomeContext = () => React.useContext(HomeContext);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState(initialValue.clients);
  const [reqError, setReqError] = useState<Error>();

  const loadClients = useCallback(async () => {
    try {
      setReqError(undefined);
      const loadedClients = await getClients();
      console.log(loadedClients)
      setClients(loadedClients);
    } catch (error) {
      console.error(error);
      setReqError(error as Error);
    } finally {
    }
  }, []);

  return (
    <HomeContext.Provider value={{ clients, loadClients, error: reqError }}>
      {children}
    </HomeContext.Provider>
  );
};
