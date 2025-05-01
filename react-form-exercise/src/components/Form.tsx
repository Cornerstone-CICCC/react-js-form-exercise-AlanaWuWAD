import { ChangeEvent, FormEvent, useState } from 'react'

type Props = {
    firstname: string,
    lastname: string,
    age: number,
    favoriteFoods: string[]
}

const Form = () => {
    const [formData, setFormData] = useState<Props>({
        firstname: '',
        lastname: '',
        age: 0,
        favoriteFoods: []
    })

    const [display, setDisplay] = useState<boolean>(false)

    const handleDisplay = () => {
        setDisplay(!display)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleBoxChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { value, checked} = e.target
        setFormData(prevState => {
            const updatedFoods = checked ? [...prevState.favoriteFoods, value] : prevState.favoriteFoods.filter(level => level !== value)
            return{
                ...prevState,
                favoriteFoods: updatedFoods
            }
        })
    }

    const handleClear = () => {
        setFormData({
            firstname: '',
            lastname: '',
            age: 0,
            favoriteFoods: []
        })
    }
    return (
        <>
            <h1>User Form</h1>
            <form >
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder='First name' />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Last name' />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder='Age' />
                </div>
                <div>
                    <label>Favorite Foods:</label>
                    <div>
                        <input type="checkbox" name="favoriteFoods" value="Chicken" checked={formData.favoriteFoods.includes("Chicken")} onChange={handleBoxChange}/>
                        <label htmlFor="chicken">Chicken</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favoriteFoods" value="Beef" checked={formData.favoriteFoods.includes("Beef")} onChange={handleBoxChange} />
                        <label htmlFor="beef">Beef</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favoriteFoods" value="Vegetables" checked={formData.favoriteFoods.includes("Vegetables")} onChange={handleBoxChange}/>
                        <label htmlFor="vegetables">Vegetables</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favoriteFoods" value="Dessert" checked={formData.favoriteFoods.includes("Dessert")} onChange={handleBoxChange}/>
                        <label htmlFor="dessert">Dessert</label>
                    </div>
                    <div>
                        <input type="checkbox" name="favoriteFoods" value="Pork" checked={formData.favoriteFoods.includes("Pork")} onChange={handleBoxChange}/>
                        <label htmlFor="pork">Pork</label>
                    </div>
                </div>
            </form>

            <button onClick={handleDisplay}>Display User</button>
            <button onClick={handleClear}>Clear</button>

            {display && (
                <fieldset className="output">
                <p>User name :  {formData.firstname} {formData.lastname}</p>
                <p>Age : {formData.age}</p>
                <p>Favorite Foods : {formData.favoriteFoods.join(' , ')}</p>
                </fieldset>
            )}
            
        </>
    )
}

export default Form