import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { MdModeEdit } from 'react-icons/md'

const SocialBar = () => {
  return (
    <div className="social_bar">
      <Link href="https://www.facebook.com/stunited.vn">
        <a target="_blank">
          <FaFacebookF />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/company/23723130">
        <a target="_blank">
          <ImLinkedin2 />
        </a>
      </Link>
      <Link href="#">
        <a target="_blank">
          <MdModeEdit />
        </a>
      </Link>
    </div>
  )
}
export default SocialBar
