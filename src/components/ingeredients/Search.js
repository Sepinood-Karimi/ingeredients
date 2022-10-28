import React from "react";
import Card from "../UI/Card";
import classes from './Search.module.css';

const Search = React.memo( () => {
    return (
        <section className={classes.search}>
            <Card>
                <div className={classes['search-input']}>
                    <label htmlFor='filter'> Filter by Title </label>
                    <input type='text' id='filter'/>
                </div>
            </Card>
        </section>
    );
});

export default Search;