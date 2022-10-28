import Card from "../UI/Card";
import classes from './IngeredientsForm.module.css';

const IngredientsForm = () => {
    return(
        <section className={classes['ingredient-form']}>
            <Card>
                    <form>
                        <div className={classes['form-control']}>
                            <label htmlFor='name'> Name </label>
                            <input id='name' type='text'/>
                        </div>
                        <div className={classes['form-control']}>
                            <label htmlFor='amount'> Amount </label>
                            <input id='amount' type='number'/>
                        </div>
                        <div className={classes['ingredient-form__actions']}>
                            <button> Add Ingredient</button>
                        </div>
                    </form>
            </Card>
        </section>
    );
};

export default IngredientsForm;