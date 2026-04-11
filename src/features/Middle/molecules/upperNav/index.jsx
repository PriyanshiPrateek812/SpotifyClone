import UpperNavButton from "../../atoms/uppernavbutton";

const items = ['All', 'Music', 'Podcasts'];
export default function UpperNav(){
    return(
        <div className="upperNav">
            {items.map((item, index)=>(
                <UpperNavButton key={index}>{item}</UpperNavButton>
            ))}
        </div>
    )
}