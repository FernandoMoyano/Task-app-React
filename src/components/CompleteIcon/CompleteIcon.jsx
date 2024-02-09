/* eslint-disable react/prop-types */
import { FaCheck } from 'react-icons/fa6'

const CompleteIcon = ({ className, onClick }) => {
  return <FaCheck className={className} onClick={onClick} />
}

export default CompleteIcon
