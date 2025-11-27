import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"
import { useState, useEffect } from "react"

const CommentArea = function ({ asin }) {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== asin) {
  //     // this.setState({
  //     //   isLoading: true,
  //     // })
  //     setIsLoading(true)

  //     try {
  //       let response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments/" + asin,
  //         {
  //           headers: {
  //             Authorization: "Bearer inserisci-qui-il-tuo-token",
  //           },
  //         }
  //       )
  //       console.log(response)
  //       if (response.ok) {
  //         let comments = await response.json()
  //         // this.setState({
  //         //   comments: comments,
  //         //   isLoading: false,
  //         //   isError: false,
  //         // })
  //         setComments(comments)
  //         setIsLoading(false)
  //         setIsError(false)
  //       } else {
  //         // this.setState({ isLoading: false, isError: true })
  //         setIsLoading(false)
  //         setIsError(true)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       // this.setState({ isLoading: false, isError: true })
  //       setIsLoading(false)
  //       setIsError(true)
  //     }
  //   }
  // }
  useEffect(() => {
    const fetchComments = async () => {
      if (!asin) return
      setIsLoading(true)
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWUyNGY0YmQ0NzAwMTU4NWIxZDgiLCJpYXQiOjE3NjM2NDY1NjcsImV4cCI6MTc2NDg1NjE2N30.EkO-g4e99JbZJpCi-c_XZ-zKBeSI1cv8XnMwpyqWZ6A",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let data = await response.json()
          setComments(data)
          setIsLoading(false)
          setIsError(false)
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }

    fetchComments()
  }, [asin])

  return (
    <div className="text-center" data-testid="test-div-commentarea">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
