import { AiOutlineMobile, AiOutlineTeam } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { MdOutlineCampaign, MdWebAsset } from 'react-icons/md'
import { SiBmcsoftware } from 'react-icons/si'

export const SERVICES = [
  {
    icon: <MdWebAsset className="icon" />,
    title: 'Web App Development',
    content:
      'We create beautifully designed web apps precisely tailored to your situationWe deliver web systems of any size and complexity — from budding startup products to hi-end enterprise solutions.',
  },
  {
    icon: <AiOutlineMobile className="icon" />,
    title: 'Mobile App Development',
    content:
      'ST provides custom mobile application development across different platforms such as iOS and Android for consumer-facing and enterprise environment.',
  },
  {
    icon: <SiBmcsoftware className="icon" />,
    title: 'Custom Software Development',
    content:
      "ST provides high quality, cost-effective and reliable software development services match your specific needs, budget and timeframe. We love to competes with other firms on the grounds of quality, creativity, n' dedication.",
  },
  {
    icon: <AiOutlineTeam className="icon" />,
    title: 'Dedicated Team',
    content:
      'Looking for the best resources to compliment your existing team? Our talented developers are available to augment your team on a short or long term basis.',
  },
  {
    icon: <MdOutlineCampaign className="icon" />,
    title: 'Digital Marketing',
    content:
      'From establishing your online presence to increasing your influence on social, we use smart analytics to help you grow your business.',
  },
  {
    icon: <BiBuildingHouse className="icon" />,
    title: 'Startup Incubation',
    content:
      'Our program provides a vast resources for entrepreneurs in Vietnam, focusing on ecosystem building, co-working spaces and incubation programs',
  },
]
