import classes from './IngridientsList.module.css';

const IngredientsList = ({ingredients}) => {
    return (
        <section className={classes['ingredient-list']}>
            <h2> Ingredient List </h2>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>
                        <span>{ ingredient.title}</span>
                        <span> x{ingredient.amount}</span>
                        <button> Delete </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default IngredientsList;