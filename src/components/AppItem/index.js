import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props

  return (
    <li className="appItemContainer">
      <img className="item-image" src={imageUrl} alt={appName} />
      <p className="appItemName">{appName}</p>
    </li>
  )
}

export default AppItem
