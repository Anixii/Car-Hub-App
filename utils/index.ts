
export const fetchCars = async() =>{ 
    const headers = {
        'X-RapidAPI-Key': '6b375bd8bcmsh44e0b73aa91d1e5p1eb99cjsn3516d424f820',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    } 
    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=2021',{headers: headers});
    const result = await response.json() 
    return result
} 
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);
  
   
    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  
  export const deleteSearchParams = (type: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
  
    newSearchParams.delete(type.toLocaleLowerCase());
  
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };
  