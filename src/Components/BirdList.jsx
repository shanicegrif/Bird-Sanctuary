import BirdCard from "./BirdCard"

export default function BirdList(prop) {
    return (
        <ul>
            {prop.bird.map((card) => {
                <BirdCard bird = {card} />
            })}
        </ul>
    );
}