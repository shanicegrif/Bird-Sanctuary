export default function BirdCard({bird, setCart}){
    function addCart(newBird){
        setCart((prev)=>[...prev,newBird]);
    }
    
    return (
        <li key={bird.id}>
            <h5>{bird.name}</h5>
            <h6>Price: ${bird.amount}</h6>
            <img src={bird.img}></img>
            <button onClick={()=>addCart(bird)}>Adopt</button>
        </li>
    )
}