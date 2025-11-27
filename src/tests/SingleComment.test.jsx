// Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CommentList from "../components/CommentList"

describe("Testing initial mounting", () => {
  // controlliamo che all'avvio della pagina, non ci siano SingleComment
  it("shouldn't show the comment", () => {
    // 1) I SingleComment sono contenuti in CommentList. Lo inizializzo come array vuoto
    render(<CommentList commentsToShow={[]} />)
    // 2)
    // qui, per testare l'ASSENZA deli commenti, la devo recuperare con un queryBy
    const comment = screen.queryByRole("listitem") // null
    const deleteButton = screen.queryByRole("button", { name: /Elimina/i })

    // 3) Non serve
    // 4)
    expect(comment).toBeNull() // dovrebbe essere proprio null
    expect(comment).not.toBeInTheDocument()
    expect(deleteButton).toBeNull() // dovrebbe essere proprio null
    expect(deleteButton).not.toBeInTheDocument()
  })
})
