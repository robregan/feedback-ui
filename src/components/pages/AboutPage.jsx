import Card from '../shared/Card'


const AboutPage = () => {

  return (
    <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for a product or a service</p>
          <span>Version: 1.0</span>    
        
         <p>
            <a href='/'>Back To Home</a>
         </p>
        </div>
    </Card>
  )
}

export default AboutPage
