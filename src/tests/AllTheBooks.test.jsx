// Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato
// Sono 150
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import AllTheBooks from "../components/AllTheBooks"

describe("testing all the cards book", () => {
  // controlliamo che le 150 CARD ci siano all'avvio
  it("shouldn't show the card", () => {
    // 1) montare il componente nel VIRTUAL DOM
    render(<AllTheBooks />)
    // 2) individuazione degli elementi da testare
    const card = screen.getAllByTestId("test-card")
    // 3) interazione con l'elemento trovato, in questo caso non serve
    // 4) verifica ipotesi/tesi, vado a confermare le mie aspettative
    expect(card).toHaveLength(150)
  })
})
