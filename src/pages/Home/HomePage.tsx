import React, { useCallback, useEffect } from "react";
import ItemComponent from "../../components/Item/ItemComponent";
import { useHomeContext } from "../../components/Providers/HomeProvider";
import { IPayment } from "../../entities/IClient";
import {
  GridCenterer,
  HeadingRow,
  HomeGrid,
  MainContainer,
} from "./HomeStyles";

export default function HomePage() {
  const { clients, error, loadClients: clientLoad } = useHomeContext();

  const loadClients = useCallback(
    async () => (clientLoad ? await clientLoad() : undefined),
    [clientLoad]
  );

  useEffect(() => {
    loadClients();
  }, [loadClients]);

  return (
    <MainContainer>
      <HeadingRow>
        <h1>{clients.length > 0 ? clients[0].user : ""}</h1>
        <h1>
          Dinero disponible $
          {clients.length > 0 ? clients[0].availableMoney.toFixed(2) : ""}
        </h1>
      </HeadingRow>
      <GridCenterer>
        <ItemList
          {...{ clients: clients.length > 0 ? clients[0].payments : [] }}
        />
      </GridCenterer>
    </MainContainer>
  );
}

interface ItemListProps {
  clients: IPayment[];
}

function ItemList(props: ItemListProps) {
  const { clients } = props;

  return (
    <HomeGrid>
      {clients.map((r) => (
        <ItemComponent key={r.id} paymentInfo={r} />
      ))}
    </HomeGrid>
  );
}
