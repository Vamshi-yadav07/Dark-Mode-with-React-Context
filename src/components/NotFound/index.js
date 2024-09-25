import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Notfound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const title = isDarkTheme ? 'dark-mode1' : 'light-mode1'
      const containerStyle = isDarkTheme ? 'dark-mode' : 'light-mode'
      return (
        <>
          <Navbar />
          <div className={containerStyle}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="about-home-img"
            />
            <h1 className={title}>Lost Your Way?</h1>
            <p className={title}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Notfound
