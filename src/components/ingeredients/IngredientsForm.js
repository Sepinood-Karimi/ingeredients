import Card from "../UI/Card";
import classes from './IngeredientsForm.module.css';
import {useState} from "react";

const IngredientsForm = ({onAddIngredients}) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAmount,setEnteredAmount]=useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const onAddIngredientsHandler = (event) => {
        event.preventDefault();
        onAddIngredients({id:enteredName,name:enteredName,amount:enteredAmount});
    }
    return(
        <section className={classes['ingredient-form']}>
            <Card>
                    <form onSubmit={onAddIngredientsHandler}>
                        <div className={classes['form-control']}>
                            <label htmlFor='name'> Name </label>
                            <input id='name' type='text' value={enteredName} onChange={nameChangeHandler}/>
                        </div>
                        <div className={classes['form-control']}>
                            <label htmlFor='amount'> Amount </label>
                            <input id='amount' type='number' value={enteredAmount} onChange={amountChangeHandler}/>
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