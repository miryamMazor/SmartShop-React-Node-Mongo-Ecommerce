import { useState } from "react"
import { Select } from "./Select"
import { SelectCity } from "./SelectCity"
import { SelectCountry } from "./SelectCountry"
import { SelectName } from "./SelectName"

export const MainSelector = () => {

    const dictionary = {
        'ישראל': ['ירושלים', 'תל אביב', 'חיפה', 'בית שמש', 'ביתר', 'מצפה יריחו', 'טבריה'],
        'ארצות הברית': ['ניו יורק', 'ניו גרסי', 'לוס אנגלס', 'אריזונה', 'וושינגטון'],
        'צרפת': ['פריז', 'מרסיי', 'טולוז', 'שנזליזה', 'פרובנס'],
        'ספרד': ['ברצלונה', 'מדריד', 'קורדובה'],
        'טורקיה': ['אנקרה', 'איסטנבול', 'אנטליה', 'איזמיר'],
        'תימן': ['צנעא', 'סינוואן', 'שעיב אסייפי', 'דמת', 'שרעב'],
        'מרוקו': ['מרקש', 'קזבלנקה', 'רבאט', 'פאס']
    }

    const [name, setName] = useState('פלוני אלמוני')
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()

    const countries = Object.keys(dictionary)
    console.log(countries);
    const cities = dictionary[selectedCountry]
    console.log(cities);

    return <>
        {name != 'פלוני אלמוני' ? <h2>{name} שלום</h2> : <SelectName setname={setName}></SelectName>}
        {/* {name != 'פלוני אלמוני' && !selectedCountry && <SelectCountry countries={countries} setCountry={setSelectedCountry}></SelectCountry>}
        {selectedCountry && !selectedCity && <SelectCity cities={cities} setCity={setSelectedCity}></SelectCity>} */}
        {name != 'פלוני אלמוני' && !selectedCountry && <Select list={countries} set={setSelectedCountry} text={'ארץ'}></Select>}
        {selectedCountry && !selectedCity && <Select list={cities} set={setSelectedCity} text={'עיר'}></Select>}
        {selectedCity && <h4>את/ה גר/ה ב{selectedCity}, {selectedCountry}</h4>}
    </>
}