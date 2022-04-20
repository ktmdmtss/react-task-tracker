import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, isAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={isAdd? 'green': 'red'} text={isAdd? 'Add': 'Close'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title : 'Task tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header