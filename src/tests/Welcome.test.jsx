// Verifica che il componente Welcome venga montato correttamente

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Welcome from "../components/Welcome"

// Test per vedere cosa viene montato nel DOM all'avvio del componente, senza ancora nessuna interazione

// per creare una suit di test, si utilizza la parola "describe"

describe("Testing initial mounting", () => {
  // qui dentro inseriremo uno dopo l'altro i test di questa "famiglia"

  // controllo che il titolo sia presente all'avvio del componente
  it("checks if title is mounted correctly", () => {
    // 1) montare il componente nel VIRTUAL DOM
    render(<Welcome />)
    // 2) individuazione degli elementi da testare
    const title = screen.getByText("Benvenuti in EpiBooks!")
    // 3) interazione con l'elemento trovato, in questo caso non serve
    // 4) verifica ipotesi/tesi, vado a confermare le mie aspettative
    expect(title).toBeInTheDocument()
  })
})
