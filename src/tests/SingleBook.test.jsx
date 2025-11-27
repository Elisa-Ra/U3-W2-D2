// Verifica che, cliccando su un libro, il suo bordo cambi colore

// import { fireEvent, render, screen } from "@testing-library/react"
// import { describe, expect, it } from "vitest"
// import SingleBook from "../components/SingleBook"

// describe("Testing click on image functionality", () => {
//   it("should change border color after card click ", () => {
//     // 1)
//     render(<SingleBook />)
//     // 2) trovo la card
//     const card = screen.getByTestId("test-border-card")
//     // 3) CLICCO sulla card!
//     expect(card).toHaveClass("none")
//     fireEvent.click(card) // ho cliccato una volta sulla card
//     // ora provo a RI-cercare il bottone con la sua nuova etichetta,
//     // e verifico sia atterrato sul DOM
//     const newCard = screen.getByTestId("test-border-card")
//     // 4) mi aspetto di trovare questa newCard nella pagina
//     expect(newCard).toHaveClass("3px solid red")
//     expect(newCard).toBeInTheDocument()
//   })
// })
