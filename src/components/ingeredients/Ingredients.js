import IngredientsForm from "./IngredientsForm";
import IngredientsList from "./IngredientsList";
import Search from "./Search";

const DUMMY_INGREDIENTS = [{
    title : 'Moz',
    amount:10
},
    {
    title : 'sth',
    amount:100
},
    {
    title : 'khiar',
    amount:23
},
    {
    title : 'watermelon',
    amount:1
},
    {
    title : 'Milk',
    amount:3
},
    {
    title : 'anything',
    amount:234
}]
const Ingredients = () => {
    return(
        <div>
            <IngredientsForm/>
            <Search/>
            <IngredientsList ingredients={DUMMY_INGREDIENTS}/>
        </div>
    );
};

export default Ingredients;