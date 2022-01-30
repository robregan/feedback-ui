
import FeedbackContext from '../context/FeedbackContext'

import { useContext } from 'react'
const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)

 const average = (feedback.reduce((a,c)=> a + c.rating, 0) / feedback.length).toFixed(1).replace(/[.,]0$/g, '')

 /* /[.,]0$/
    Match a single character present in the list below [.,]
    ., matches a single character in the list ., (case sensitive)
    0 matches the character 0 with index 4810 (3016 or 608) literally (case sensitive)
    $ asserts position at the end of a line 
*/

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  ) 
};


export default FeedbackStats;
