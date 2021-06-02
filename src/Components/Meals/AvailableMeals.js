import classes from './AvailableMeals.module.css';
import Card from '../UI/Card'
import MealItem from './MealItems/MealItem'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Burger',
      description: 'Crisp patty and fresh veggies',
      price: 150,
    },
    {
      id: 'm2',
      name: 'Chicken Tandoori',
      description: 'tender and juicy',
      price: 280,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 300,
    },
    {
      id: 'm4',
      name: 'Green Bowl Salad',
      description: 'Healthy...and green...',
      price: 120,
    },
  ];
  const AvailableMeals=()=>{
      return <section className={classes.meals}>
          <Card>
            <ul>
            {DUMMY_MEALS.map(meal=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>)}
            </ul>
          </Card>
      </section>
  }
  export default AvailableMeals;