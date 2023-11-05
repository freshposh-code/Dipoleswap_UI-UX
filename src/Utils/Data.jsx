import { Facebook, LinkedIn, Twitter } from "@mui/icons-material"
import { Diamond, dipol2, dipol3, price, video1, video2, video3 } from "../assets"
 
 export const navbar = [
    {
      name: "Home",
      id: "#Home"
    },
    {
      name: "Trade",
      id: "#Trade"
    },
    {
      name: "Earn",
      id: "#Earn"
    },
    {
      name: "NFT",
      id: "#NFT"
    },
    {
      name: "Bridge",
      id: "#Bridge"
    },
]

export const tiltCards = [
  {
    TiltImg: Diamond,
    TiltText: "Total Supply",
    TiltTotal: "255,080,266"
  },
  {
    TiltImg: dipol2,
    TiltText: "Market Cap",
    TiltTotal: "332,372,544"
  },
  {
    TiltImg: dipol3,
    TiltText: "TVL",
    TiltTotal: "$4.20b"
  },
  {
    TiltImg: price,
    TiltText: "Price",
    TiltTotal: "$2.52"
  },
]

export const tokenCards = [
  {
    Token: "TokenA-TokenB LP",
    Percentage: "259.848%",
    ARP: "ARP"
  },
  {
    Token: "TokenA-TokenB LP",
    Percentage: "259.848%",
    ARP: "ARP"
  },
  {
    Token: "TokenA-TokenB LP",
    Percentage: "259.848%",
    ARP: "ARP"
  },
  {
    Token: "TokenA-TokenB LP",
    Percentage: "259.848%",
    ARP: "ARP"
  },
]

export const dipolSwipe = [
  {
    vid: video1
  },
  {
    vid: video2
  },
  {
    vid: video3
  },
]

export const dipolFooter = [ 
  {
    name:"About"
  },
  {
    name:"Developers"
  },
  {
    name:"Help"
  },
  
  {
   icon: <Facebook style={{backgroundColor: "blue", padding: "10px", fontSize:"2.5rem", borderRadius: "50%"}}/>
  },
  {
   icon: <LinkedIn style={{backgroundColor: "blue", padding: "10px", fontSize:"2.5rem", borderRadius: "50%"}}/>
  },
  {
   icon: <Twitter style={{backgroundColor: "blue", padding: "10px", fontSize:"2.5rem", borderRadius: "50%"}}/>
  },
]