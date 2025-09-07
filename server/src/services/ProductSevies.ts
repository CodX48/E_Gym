import { ProductModel } from "../model/productModel";

export interface IProduct {
    title: string;
    image: string;
    price: number;
    stock: number;
};

//get products
export const GetProducts = async () => {
    return await ProductModel.find();
};

//set products 
export const SeedProducts = async () => {
    const TempList: IProduct[] = [
  {
    title: "Adjustable Dumbbell Set - 50lbs",
    image: "https://imgs.search.brave.com/NA_v1twqFrX8rQ-Pker_3PWy_ywquU5FuKuc-XEjR6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA1L2FkanVz/dGFibGUtZHVtYmJl/bGwtMjA0OHB4LTkz/NTMuanBnP2F1dG89/d2VicCZxdWFsaXR5/PTc1JndpZHRoPTEw/MjQ",
    price: 89.99,
    stock: 15
  },
  {
    title: "Cast Iron Kettlebell - 20kg",
    image: "https://imgs.search.brave.com/eaAEgTCco8eE-Qzo3PE8j44sxJLHb8BvDtBRIwn2jRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NjgwMzM3My9waG90/by9rZXR0bGViZWxs/LTNkLXJlbmRlcmlu/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9U29mMW1WTEpJ/c09sUlJSZTVnc3la/QWNZM2NCbkZ3SVRz/X19CN1g5ZWlPVT0",
    price: 49.99,
    stock: 12
  },
  {
    title: "Non-Slip Yoga Mat with Strap",
    image: "https://imgs.search.brave.com/NietDzJxi_NSUAwCfcfa7fwp7Risw3Ep2lfKrxLtYuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/MDI3ODA4L3Bob3Rv/L3lvZ2EtbWF0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1E/dDFfUHYyRlFZdlNC/ZWdkWEo5SnJYNWh3/VDcybHl5dFVDOC1J/VXF5N2RFPQ",
    price: 29.99,
    stock: 30
  },
  {
    title: "Set of 5 Resistance Bands - Varying Tension",
    image: "https://imgs.search.brave.com/0DI3Bh6mUKoudjUxuKfjD6tUhsN9kEELjC8zwRHmtGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzEyLzA0LzE3/LzM2MF9GXzEyMDQx/NzcyX3FncHFUdFpC/VEVDZnRaZXc5R3VO/aExyaXA3bG9QbmI1/LmpwZw",
    price: 19.99,
    stock: 25
  },
  {
    title: "Doorway Pull-Up Bar - Adjustable Width",
    image: "https://imgs.search.brave.com/ACDBCOuA0xJL2cCrWMHNdP6L3cfRRgWfGzqMIEv8C88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVsbHVwLWRpcC5j/b20vY2RuL3Nob3Av/ZmlsZXMvcHVsbHVw/LWRpcC1iYXItaW5k/b29yLXRpdGxlXzQ5/ODM4MmI5LTE5NDkt/NDAwMi04NzdhLTI1/NTkzNDQ3NzJkZV82/MDB4LmpwZz92PTE2/ODcxMDM1NzQ",
    price: 39.99,
    stock: 10
  },
  {
    title: "High-Density Foam Roller - 18 inch",
    image: "https://imgs.search.brave.com/ECs6QD9zGkkQ9ys-vWVbCiAU5d-25kBNwe71UnQIgaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/NDkxMzEyNi9waG90/by9tYXNzYWdlLXJv/bGxlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VmpZZFpZ/dllYNWZiU0RyVWpl/TGtCbExqUEZZMElZ/dFlQWVlxUW9rWWUw/ST0",
    price: 22.50,
    stock: 20
  },
  {
    title: "Speed Jump Rope with Ball Bearings",
    image: "https://imgs.search.brave.com/QYjTbyglcrZyuQ6j6ZgCMxSgfL66DXmPC_Dz8gajY84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgx/MDc5MzE3L3Bob3Rv/L2p1bXAtcm9wZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dFNqb21kWGVHeDN2/clBoVmNObVBRQ181/Vm1vMUpSeUJYXy1Y/Uy05eTFqZz0",
    price: 14.99,
    stock: 40
  },
  {
    title: "Adjustable Weight Bench - Foldable Design",
    image: "https://imgs.search.brave.com/DdpzA-cJDWd2lFxA-n_mhll5JOHoAcaAzojUS-MfOIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA4/MDIvMTUwOC8xMjM3/L2ZpbGVzL2Jlc3Qt/d2VpZ2h0LWJlbmNo/ZXMuanBnP3Y9MTcy/MzQ4Mzg3NA",
    price: 119.00,
    stock: 8
  },
  {
    title: "Breathable Gym Gloves with Wrist Support",
    image: "https://imgs.search.brave.com/Un293eNv0-mSnmJTj8OTNceMQeSSdc9inE0BiPrzZ9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FpYW0uY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzLzA1LTY1MzAx/X0Vzc2VudGlhbHMt/Rml0bmVzcy1HbG92/ZS1CbGFjay1CbGFj/ay1TLU1fQV8xMDI0/eDEwMjQuanBnP3Y9/MTcwNjgyNTE2Mg",
    price: 17.49,
    stock: 50
  },
  {
    title: "Insulated Stainless Steel Water Bottle - 1L",
    image: "https://imgs.search.brave.com/x6btZBhX1SRAareVwjxUHDZ-q_L8SCm5QNZT9aOn5g4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnVmY2d5bS5jb20v/Y2RuL3Nob3AvZmls/ZXMvR3ltd2F0ZXJi/b3R0bGVfMS5qcGc_/dj0xNzExNjY3NTc0/JndpZHRoPTE0NDU",
    price: 24.95,
    stock: 35
  }
];


    const count = await ProductModel.countDocuments();
    
    if (count === 0) {
      return  await ProductModel.insertMany(TempList);
    };

};

export const GetDataFromDB = async () => {
    const count = await ProductModel.countDocuments();
    if (count === 0) {
        return { data: "No products available", status: 400 };
    }

    const Products = await ProductModel.find();
    return { data: Products, status: 200 };
};
