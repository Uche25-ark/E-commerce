import p1_img from "./product/iphone 13 pro max.png";
import p2_img from './product/iphone 13.png';
import p3_img from './product/iphone 11 pro.png';
import p4_img from './product/iphone 16.png';
import p5_img from './product/iphone 17.png';
import p6_img from './product/iphone 17 pro max.png';
import p7_img from './product/iphone 16 pro max.png';
import p8_img from './product/iphone 11.png';
import p9_img from './product/iphone 12 pro max.png';
import p10_img from './product/iphone 12.png';
import p11_img from './product/iphone 13.png';
import p12_img from './product/iphone 14.png';
import p13_img from './product/iphone se.png';
import p14_img from './product/iphone xr.png';
import p15_img from './product/iphone 7.png';
import p16_img from './product/s22.png';
import p17_img from './product/Samsung_Galaxy_A33.png';
import p18_img from './product/samsung_galaxy_s10.png';
import p19_img from './product/Samsung Galaxy S23.png';
import p20_img from './product/Samsung Galaxy Z.png';
import p21_img from './product/Lenovo.png';
import p22_img from './product/hp.png';
import p23_img from './product/apple2.png';
import p24_img from './product/Asus.png';
import p25_img from './product/battery_inverter.png';
import p26_img from './product/blue_apple.png';
import p27_img from './product/charger.png';
import p28_img from './product/dstv.png';
import p29_img from './product/ecoflow.png';
import p30_img from './product/fan.png';
import p31_img from './product/generator.png';
import p32_img from './product/inverter.png';
import p33_img from './product/JBL_XTREME3BLU.png';
import p34_img from './product/party_Box.png';
import p35_img from './product/powerbank.png';
import p36_img from './product/powerhouse_generator.png';
import p37_img from './product/solar_generator.png';
import p38_img from './product/solar_pannel.png';
import p39_img from './product/Wireless Bluetooth.png';




let all_product = [
    {
        id: 1,
        name: "iphone 13 pro max",
        category: "Iphone",
        image:p1_img,
        new_price: 999,
        old_price: 1099,
    },
    {
        id: 2,
        name: "iphone 13",
        category: "Iphone",
        image:p2_img,
        new_price: 799,
        old_price: 899,
    },
    {
        id: 3,
        name: "iphone 11 pro",
        category: "Iphone",
        image:p3_img,
        new_price: 2399,
        old_price: 2499,
    },
    {
        id: 4,
        name: "iphone 16 ",
        category: "Iphone",
        image:p4_img,
        new_price: 2399,
        old_price: 2499,
    },
    {   
        id: 5,
        name: "iphone 17 ",
        category: "Iphone",
        image:p5_img,
        new_price: 599,
        old_price: 699,
    },
    {
        id: 6,
        name: "iphone 17 pro max",
        category: "Iphone",
        image:p6_img,
        new_price: 499,
        old_price: 599,
    },
    {
        id: 7,
        name: "iphone 16 pro max",
        category: "Iphone",
        image:p7_img,
        new_price: 399,
        old_price: 499,
    },
    {
        id: 8,
        name: "iphone 11",
        category: "Iphone",
        image:p8_img,
        new_price: 299,
        old_price: 399,
    },
    {   
        id: 9,
        name: "iphone 12 pro max",
        category: "Iphone",
        image:p9_img,
        new_price: 199,
        old_price: 299,
    },
    {
        id: 10,
        name: "iphone 12",
        category: "Iphone",
        image:p10_img,
        new_price: 149,
        old_price: 249,
    },
    {
        id: 11,
        name: "iphone 13",
        category: "Iphone",
        image:p11_img,
        new_price: 99,
        old_price: 199,
    },
    {
        id: 12,
        name: "iphone 14",
        category: "Iphone",
        image:p12_img,
        new_price: 79,
        old_price: 149,
    },
    {
        id: 13,
        name: "iphone SE",
        category: "Iphone",
        image:p13_img,
        new_price: 59,
        old_price: 129,
    },
    {
        id: 14,
        name: "iphone XR",
        category: "Iphone",
        image:p14_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 15,
        name: "iphone 7",
        category: "Iphone",
        image:p15_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 16,
        name: "s22",
        category: "Samsung",
        image:p16_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 17,
        name: "Samsung Galaxy A33",
        category: "Samsung",
        image:p17_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 18,
        name: "Samsung Galaxy s10",
        category: "Samsung",
        image:p18_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 19,
        name: "Samsung Galaxy S23",
        category: "Samsung",
        image:p19_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 20,
        name: "Samsung Galaxy Z",
        category: "Samsung",
        image:p20_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 21,
        name: "Lenovo",
        category: "Laptop",
        image:p21_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 22,
        name: "hp",
        category: "Laptop",
        image:p22_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 23,
        name: "apple2",
        category: "Laptop",
        image:p23_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 24,
        name: "Asus",
        category: "Laptop",
        image:p24_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 25,
        name: "battery_inverter",
        category: "Others",
        image:p25_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 26,
        name: "blue_apple",
        category: "Laptop",
        image:p26_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 27,
        name: "charger",
        category: "Accessories",
        image:p27_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 28,
        name: "dstv",
        category: "Others",
        image:p28_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 29,
        name: "ecoflow",
        category: "Others",
        image:p29_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 30,
        name: "fan",
        category: "Others",
        image:p30_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 31,
        name: "generator",
        category: "Others",
        image:p31_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 32,
        name: "inverter",
        category: "Others",
        image:p32_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 33,
        name: "JBL XTREME3BLU",
        category: "Accessories",
        image:p33_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 34,
        name: "party_Box",
        category: "Accessories",
        image:p34_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 35,
        name: "powerbank",
        category: "Accessories",
        image:p35_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 36,
        name: "Powerhouse_generator",
        category: "Others",
        image:p36_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 37,
        name: "solar_generator",
        category: "Others",
        image:p37_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 38,
        name: "solar_pannel",
        category: "Others",
        image:p38_img,
        new_price: 29,
        old_price: 39,
    },
    {
        id: 39,
        name: "Wireless Bluetooth",
        category: "Others",
        image:p39_img,
        new_price: 29,
        old_price: 39,
    }

    
    

   
];

export default all_product;