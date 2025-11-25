import { Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"

const AddComment = ({ asin }) => {
  // state = {
  //   comment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  })

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== asin) {
  //     // this.setState({
  //     //   comment: {
  //     //     ...this.state.comment,
  //     //     elementId: asin,
  //     //   },
  //     // })
  //     setComment({ ...comment,
  //         elementId: asin,})
  //   }
  // }

  useEffect(() => {
    setComment((prevProps) => ({
      ...prevProps,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWUyNGY0YmQ0NzAwMTU4NWIxZDgiLCJpYXQiOjE3NjM2NDY1NjcsImV4cCI6MTc2NDg1NjE2N30.EkO-g4e99JbZJpCi-c_XZ-zKBeSI1cv8XnMwpyqWZ6A",
          },
        }
      )
      if (response.ok) {
        alert("Recensione inviata!")
        // this.setState({
        //   comment: {
        //     comment: "",
        //     rate: 1,
        //     elementId: asin,
        //   },
        // })
        setComment({
          comment: "",
          rate: 1,
          elementId: asin,
        })
      } else {
        throw new Error("Qualcosa è andato storto")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // })
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // })
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
