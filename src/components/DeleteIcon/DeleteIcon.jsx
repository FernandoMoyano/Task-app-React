/* eslint-disable react/prop-types */
import { FaRegTrashCan } from 'react-icons/fa6'

const DeleteIcon = (props) => {
  const { onClick, className } = props
  return <FaRegTrashCan className={className} onClick={onClick} />
}

export default DeleteIcon
