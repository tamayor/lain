import shuffle from 'shuffle-array'; 
import Marquee from 'react-fast-marquee';

import gotchu from "../files/client/gotchu-logo.jpg"
import pakupakiss from "../files/client/pakupakiss-logo.jpg"
import ken from "../files/client/ken-logo.jpg"
import flipkingx from "../files/client/flipkingx-logo.jpg"
import hugyaw from "../files/client/hugyaw-logo.jpg"
import ms from "../files/client/ms-damian-logo.jpg"
import yiew from "../files/client/travel-with-yiew.jpg"
import hirayaTurismo from "../files/client/hiraya-turismo.jpg"
import tubunganParish from "../files/client/tubunganParish.jpg"
import joanna from "../files/client/joanna-logo.jpg"



const Client = () => {

    const clients = [
        {
            href: "https://www.youtube.com/@ThisHakkaGirlJoanna/shorts",
            src: joanna
        },
        {
            href: "https://www.youtube.com/@GotchuClub/videos",
            src: gotchu
        },
        {
            href: "https://www.youtube.com/@TheNEXTBIGTHING1912/videos",
            src: pakupakiss
        },
        {
            href: "https://www.youtube.com/@KennyTVnow/videos",
            src: ken
        },
        {
            href: "https://fb.watch/qV2Lra7ilP/",
            src: flipkingx
        },
        {
            href: "https://www.facebook.com/youthforcultureandtheartsorganization/videos",
            src: hugyaw
        },
        {
            href: "https://www.youtube.com/@NoStressMS/shorts",
            src: ms
        },
        {
            href: "https://www.youtube.com/watch?v=svBrkzApB4Q",
            src: yiew
        },
        {
            href: "https://www.facebook.com/profile.php?id=61550971516675",
            src: hirayaTurismo
        },
        {
            href: "https://www.facebook.com/ParokyaSangTubungan/videos/1104219520951401",
            src: tubunganParish
        },
    ]

    const client = shuffle(clients).map(c=>{
        return(
            <a href={c.href} target="_blank" without rel="noreferrer">
            <img alt="client-logo" src={c.src} className="animate-pulse rounded-full w-16 mx-5 mt-5 hover hover:cursor-pointer"/>
            </a>
        )
    })
    return ( 
        <div className="flex flex-col items-center font-sm text text-2xl">
            <h1 className="pt-10 pb-2 tracking-wider uppercase text-sm text-neutral-400">Worked with</h1>
            <div className="flex justify-center items-center py-3 mb-3 w-full">
                <Marquee play={true} pauseOnHover={true} speed={20} >
                {client}
                </Marquee>
            </div>
        </div>
     );
}
 
export default Client;