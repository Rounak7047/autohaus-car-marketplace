import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import hatchback from "@/assets/car-hatchback.jpg";
import electric from "@/assets/car-electric.jpg";
import luxury from "@/assets/car-luxury.jpg";

export type Car = {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  km: number;
  fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  type: "SUV" | "Sedan" | "Hatchback" | "Electric" | "Luxury";
  image: string;
};

export const CARS: Car[] = [
  { id: "1", name: "Range Shadow X", brand: "Range Rover", price: 78500, year: 2023, km: 12400, fuel: "Diesel", type: "SUV", image: suv },
  { id: "2", name: "Aurora 5 Series", brand: "BMW", price: 54200, year: 2022, km: 22800, fuel: "Petrol", type: "Sedan", image: sedan },
  { id: "3", name: "Vento GTI", brand: "Volkswagen", price: 21900, year: 2021, km: 34000, fuel: "Petrol", type: "Hatchback", image: hatchback },
  { id: "4", name: "Volt One", brand: "Tesla", price: 62800, year: 2024, km: 5400, fuel: "Electric", type: "Electric", image: electric },
  { id: "5", name: "Phantom GT", brand: "Aston", price: 184000, year: 2023, km: 3200, fuel: "Petrol", type: "Luxury", image: luxury },
  { id: "6", name: "Eclipse Cross", brand: "Mitsubishi", price: 28400, year: 2022, km: 41200, fuel: "Hybrid", type: "SUV", image: suv },
  { id: "7", name: "Stellar S6", brand: "Audi", price: 47800, year: 2023, km: 18900, fuel: "Petrol", type: "Sedan", image: sedan },
  { id: "8", name: "Bolt EV", brand: "Chevrolet", price: 32100, year: 2024, km: 8600, fuel: "Electric", type: "Electric", image: electric },
];
