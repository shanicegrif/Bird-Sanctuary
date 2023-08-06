import BirdCard from "./BirdCard"

export default function BirdList({bird, setCart}) {
    return (
        <ul>
            {bird.map((card) => {
               return <BirdCard bird = {card} setCart = {setCart} />
            })}
        </ul>
    );
}