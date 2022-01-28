import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }



  return (
   <header style={headerStyles}>
     <div className="container">
      <h2>{text}</h2>
     </div>
   </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
}

Header.defaultProps = {

  text: 'FeedBack UI',
  bgColor: 'rbga(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header;