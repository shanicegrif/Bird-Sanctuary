export default function BirdCard({bird}) {
    return (
        <li key={bird.id} >
            <h5>{bird.name}</h5>
            <h6>Price: {bird.amount}</h6>
            <img src={bird.img} alt= {bird.name} />
            <button>Adopt</button>
        </li>
    )
}