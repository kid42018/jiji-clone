import { createSlice } from '@reduxjs/toolkit'

const catagorieSlice = createSlice({
  name: 'counter',
  initialState: {
   catagorie:[
    {
      name:"Vehicles",image:"vehicles.png",ads:0,
      subcatagorie:[
        {name:"Cars",image:"vehicles.png",ads:0},
        {name:"Buses and Microbuses",image:"vehicles.png",ads:0},
        {name:"Heavy equipment",image:"vehicles.png",ads:0},
        {name:"Motorcycles and Scooters",image:"vehicles.png",ads:0},
        {name:"Truck & Tailers",image:"vehicles.png",ads:0},
        {name:"Vechicle Parts & Accessories",image:"vehicles.png",ads:0},
        {name:"Watercraft & Boats",image:"vehicles.png",ads:0}
      ]
    },
    {
      name:"Porperty",image:"real-estate.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
        {name:"Property",image:"real-estate.png",ads:0},
      ]
    },
    {
      name:"Mobile Phones & Tablets",image:"mobile.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Electronics",image:"electronics.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Home, Furniture & Appliances",image:"home.png"},
    {
      name:"Health & Beauty",image:"beauty.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Fashion",image:"fashion.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Sports, Arts & Outdoors",image:"hobbies.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Seeking Work - CVs",image:"jobseekers.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Services",image:"services.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Jobs",image:"jobs.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Babies & Kids",image:"babies.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Animals & Pets",image:"animals.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Agricultrue & Food",image:"agriculture.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Commercial Equipments & Tools",image:"equipment.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    },
    {
      name:"Repair & Construction",image:"repair.png",ads:0,
      subcatagorie:[
        {name:"Property",image:"real-estate.png",ads:0}
      ]
    }
   ]
  },
  reducers: {
    
  }
})
export default catagorieSlice.reducer;