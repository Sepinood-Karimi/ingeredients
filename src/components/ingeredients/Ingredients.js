import IngredientsForm from "./IngredientsForm";
import Search from "./Search";

const Ingredients = () => {
    return(
        <div>
            <IngredientsForm/>
            <section>
                <Search/>
            </section>
        </div>
    );
};

export default Ingredients;