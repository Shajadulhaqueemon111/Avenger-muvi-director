
import PropTypes from 'prop-types';
const Cart = ({selectActor, remaining, totalCost}) => {
    // const {name}=selectAcctor
    console.log(selectActor)
   
    return (
        <div>
            <h3>Total actor : {selectActor.length}</h3>
           <h5>Remainning :{remaining}</h5>
           <h5>TotalCost : {totalCost}</h5>
            <ul>
        {
        selectActor.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
        </div>
    );
};
Cart.propTypes = {
    selectActor: PropTypes.arrayOf,
    remaining: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
}
export default Cart;