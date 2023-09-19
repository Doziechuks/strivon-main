import backend from '../../assets/images/backend track.jpg'
import frontend from '../../assets/images/frontend track.jpg';
import frontend1 from '../../assets/images/frontend track.jpg';
import backend2 from '../../assets/images/backendd.jpg'
import frontend2 from '../../assets/images/frontenddd.jpeg'
import mobile2 from '../../assets/images/mobileappdev.jpg'
import mobile from '../../assets/images/mobile app track.jpg'

export const cardContents = [
    {
        id: 1,
        imgUrl: frontend2,
        title: "Frontend Web development",
        desc: "You will be introduced into the world of web development where you will master the core skills you will need in advanced studies",
        link: 'frontend'
    },
    {
        id: 2,
        imgUrl: backend2,
        title: "Backend Web development",
        desc: "Everything that goes on in the hood of a website (server-side) and how changes can be effected from the frontend (client-side)",
        link: 'backend'
    },
    {
        id: 3,
        imgUrl: mobile2,
        title: "Mobile App development",
        desc: "Mobile app development involves both the unseen server-side operations and user interface changes on your device.",
        link: "mobileapp"
    }
]