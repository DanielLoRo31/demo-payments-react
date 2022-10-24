import React from "react";
import { IPayment } from "../../entities/IClient";
import {
  ButtonGroup,
  CardBackground,
  CardBody,
  CardBold,
  CardContent,
  CardHeading,
} from "./ItemStyles";

export interface ItemProps {
  paymentInfo: IPayment;
}

export default function ItemComponent(props: ItemProps) {
  const { id, establishmentAccount, paymentDetail, total, createAt } =
    props.paymentInfo;
  return (
    <>
      <CardBackground>
        <CardHeading>Establecimiento: {establishmentAccount}</CardHeading>
        <CardContent>
          <CardBody>
            <div>
              Detalle:
              <br />
              {paymentDetail.map((r) => (
                <>
                  MP: {r.method} | FP: {r.form} | TOTAL: ${r.total.toFixed(2)}
                  <br />
                </>
              ))}
              <br />
              Total: <CardBold>${total.toFixed(2)}</CardBold>
              <br />
              <br />
              Fecha de Pago:{" "}
              <CardBold>
                {new Date(createAt).toLocaleDateString("es-MX")}
              </CardBold>
            </div>
            <ButtonGroup></ButtonGroup>
          </CardBody>
        </CardContent>
      </CardBackground>
    </>
  );
}
