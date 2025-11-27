// Verifica che il componente CommentArea venga renderizzato correttamente
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CommentArea from "../components/CommentArea"

// Test per vedere cosa viene montato nel DOM all'avvio del componente, senza ancora nessuna interazione

describe("Testing initial mounting", () => {
  // controllo che il div sia presente all'avvio del componente
  it("checks if the container is mounted correctly", () => {
    // 1) montare il componente nel VIRTUAL DOM
    render(<CommentArea />)

    // 2) individuazione degli elementi da testare
    const container = screen.getByTestId("test-div-commentarea")
    // 3) interazione con l'elemento trovato, in questo caso non serve
    // 4) verifica ipotesi/tesi, vado a confermare le mie aspettative
    expect(container).toBeInTheDocument()
  })
})
