import {BsFacebook,BsYoutube,BsWhatsapp,BsPinterest,BsMessenger,BsInstagram,BsTwitter,} from "react-icons/bs"
import '../styles/ProductDetail.css'

export const Icons = () => {

    const social = [
        {
            id: 1,
            title: <BsFacebook />,
            to: "https://www.facebook.com/Gearbestshopping",
          },

        {
          id: 1,
          title: <BsYoutube />,
          to: "https://youtu.be/OSHtduartHo",
        },
        {
          id: 2,
          title: <BsWhatsapp />,
          to: "",
        },
        {
          id: 3,
          title: <BsInstagram />,
          to: "",
        },
        {
            id: 4,
            title: <BsMessenger/>,
            to: "",
          },
          {
            id: 4,
            title: <BsTwitter/>,
            to: "",
          },
          {
            id: 4,
            title: <BsPinterest/>,
            to: "",
          },
      ];
      return(
        <div className="socialmedia">share to: 
            {social.map((e)=>(
          <div style={e.color} className="icon"key={e.id}>
              {e.title} </div>
     ))}
        </div>
      )
}