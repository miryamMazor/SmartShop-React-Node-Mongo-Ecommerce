import { Fruit } from "./Fruit"

export const List = () => {

    console.log('list');
    
    const arr = [
        { name: 'banana', color: 'yellow' },
        { name: 'melon', color: 'orange' },
        { name: 'date', color: 'brown' },
        { name: 'stawberry', color: 'red' }
    ]

    return <>
        {/* {arr.map((item, index) => <Fruit key={index} fruit={item}></Fruit>)} */}
        {arr.map((item, index) => <Fruit key={index} name={item.name} color={item.color}></Fruit>)}
    </>
}