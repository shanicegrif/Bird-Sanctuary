import BirdCard from "./BirdCard"

export default function BirdList({bird, setCart}) {
    return (
        <ul className="birds">
            {bird.map((card) => {
               return <BirdCard bird = {card} setCart = {setCart} />
            })}
        </ul>
    );
}