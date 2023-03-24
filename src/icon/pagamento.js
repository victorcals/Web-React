import "./pagamento.css";
import React from "react";
import { useParams } from 'react-router-dom';

import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRadio, MDBRow } from 'mdb-react-ui-kit';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import { usePopper } from 'react-popper';

const valores = [{

    "nome": "Basico",
    "valor": "U$",
    "disponivel": "1",
    "Propagandas": "Propagandas a cada 10 minutos",

},
{
    "nome": "Medio",
    "valor": "5U$",
    "disponivel": "10",
    "Propagandas": "1 Propaganda por filme",

},
{
    "nome": " Pro",
    "valor": "25U$",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]

export default function Pagamento() {
    const { val } = useParams();

    return (
        < div cals="container" >
            <h1 className='pagamento'> Plano escolhido: {val}</h1>
            <div>
                {(() => {
                    if (val == 'Basico') {
                        return (
                            <div className='pagamento'>
                                <form >
                                    <h3> {valores[0].nome}</h3>
                                    <h4> {valores[0].valor}</h4>
                                    <h4> {valores[0].disponivel}</h4>
                                    <h4> {valores[0].Propagandas}</h4>
                                </form>

                            </div>
                        )
                    }
                    else if (val == 'Medio') {
                        return (
                            <div>
                                <h3> {valores[0].nome}</h3>
                                <h4> {valores[0].valor}</h4>
                                <h4> {valores[0].disponivel}</h4>
                                <h4> {valores[0].Propagandas}</h4>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <h3> {valores[0].nome}</h3>
                                <h4> {valores[0].valor}</h4>
                                <h4> {valores[0].disponivel}</h4>
                                <h4> {valores[0].Propagandas}</h4>

                            </div>
                        )
                    }
                }

                )()}

                <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }} >
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md="8" lg="6" xl="4">
                            <MDBCard className="rounded-3">
                                <MDBCardBody className="mx-1 my-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <MDBIcon
                                                fab
                                                icon="cc-visa"
                                                size="4x"
                                                className="text-black pe-3"
                                            />
                                        </div>
                                        <div>
                                            <p className="d-flex flex-column mb-0">
                                                <b>Victor Cals</b>
                                                <span className="small text-muted">**** 8880</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="d-flex flex-row pb-3">
                                            <div
                                                className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                                                style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                                            >
                                                <div className="d-flex align-items-center pe-3">
                                                    <MDBRadio
                                                        name="radioNoLabelX"
                                                        id="radioNoLabel11"
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="mb-1 small text-primary">
                                                        Valor total
                                                    </p>
                                                    <h6 className="mb-0 text-primary">{valores[0].valor}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row pb-3">
                                        <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                                            <div className="d-flex align-items-center pe-3">
                                                <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
                                            </div>
                                            <div className="d-flex flex-column py-1">
                                                <p className="mb-1 small text-primary">Other amount</p>
                                                <div className="d-flex flex-row align-items-center">
                                                    <h6 className="mb-0 text-primary pe-1">$</h6>
                                                    <MDBInput
                                                        id="typeNumber"
                                                        type="number"
                                                        size="sm"
                                                        style={{ width: "55px" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pb-1">
                                        <a href="#!" className="text-muted">
                                            Voltar
                                        </a>
                                        <MDBBtn size="lg">Pagar</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}