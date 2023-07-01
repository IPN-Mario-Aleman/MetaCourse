import React from 'react'
import FeedbackForm from '../../components/FeedBackF'

const index = () => {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  )
}

export default index