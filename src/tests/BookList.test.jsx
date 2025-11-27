// Verifica, magari con più tests, che il filtraggio dei libri tramite BookList si comporti come previsto.

import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import BookList from "../components/BookList"
import fantasy from "../data/fantasy.json"

describe("testing post list", () => {
  // - all'avvio ci sia il campo di ricerca
  it("checks at mounting title and input field", () => {
    // 1)
    render(<BookList books={fantasy} />)
    // 2) Controllo la presenza del campo di ricerca
    const search = screen.getByPlaceholderText(/Cerca un libro/i)
    // 3) Non serve
    // 4)

    expect(search).toBeInTheDocument()
  })
  // - cercando una determinata parola dovrebbero filtrarsi tot risultati
  it('should show just 8 results with the filter "dragon"', async () => {
    // 1)
    render(<BookList books={fantasy} />)
    // 2)
    const search = screen.getByPlaceholderText(/Cerca un libro/i)
    // 3)
    // scrivo dentro l'input la parola "dragon"
    fireEvent.change(search, { target: { value: "dragon" } })
    // cerco quanti Listgroup.Item sono rimasti
    const elementi = await screen.findAllByTestId("test-singlebook-list")
    expect(elementi).toHaveLength(8)
  })
})

//Verifica che, cliccando su un libro, il suo bordo cambi colore
describe("BookList click functionality", () => {
  it("should change border color after clicking on a book", () => {
    render(<BookList books={fantasy} />)

    // prendo tutte le card
    const cards = screen.getAllByTestId("test-border-card")

    // inizialmente nessun bordo rosso
    expect(cards[0]).not.toHaveStyle("border: 3px solid red")

    // clicco la prima card
    fireEvent.click(cards[0])

    // ora la prima card deve avere bordo rosso
    expect(cards[0]).toHaveStyle("border: 3px solid red")
    // la seconda resta senza bordo
  })
})
