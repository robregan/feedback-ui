// changing global state to learn about context api
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this banger is from context brah!',
            rating: 100
        }
    ]);

    const deleteFeedback = (id)  => {
        if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter(item => item.id !== id))
        }
      }
  

    return <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
            }}
        >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext