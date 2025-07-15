export const List = () => {

    const arr = ['banana', 'melon', 'date', 'strawberry', 'lemon', 'orange', 'peach', 'apple', 'pear', 'cherry']

    console.log('aaa')
    console.error('bbb')
    console.info('ccc')
    console.warn('ddd')

    return <>
        <ul>
            {/* משתנה אחד - האיבר בעצמו */}
            {/* {arr.map(item => <li key={item}>{item}</li>)} */}
            {/* שני משתנים: הראשון = האיבר בעצמו, השני = האינדקס */}
            {arr.map((item, index) => <li key={index}>{index} - {item}</li>)}
            {/* יש אפשרות להשתמש בתנאים ... */}
            {/* {arr.map(item => item.length > 5 && <li>{item}</li>)} */}
        </ul>
    </>
}