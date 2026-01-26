import { api } from './api';

interface Car{
    Id: number;
    Make: string;
    Model: string;
    Year: number;
    Price: number;
    Mileage: number;
    FuelType: string;
    Transmission: string;
    Color: string;
    shortDescription: string;
};

interface CarDetails{
    Id: number;
    Make: string;
    Model: string;
    Year: number;
    Price: number;
    Mileage: number;
    FuelType: string;
    Transmission: string;
    Color: string;
    Description: string;
    CreatedAt: Date;
    UpdatedAt: Date;

    SellerId: number;
    SellerFirstName: string;
    SellerLastName: string;
    SellerPhoneNumber: string;
};

interface CreateCarRequest{
    Make: string;
    Model: string;
    Year: number;
    Price: number;
    Mileage: number;
    FuelType: string;
    Transmission: string;
    Color: string;
    Description: string;

    UserId: number;
};

interface UpdateCarRequest{
    Make: string;
    Model: string;
    Year: number;
    Price: number;
    Mileage: number;
    FuelType: string;
    Transmission: string;
    Color: string;
    Description: string;
};

export const getCars = async(): Promise<Car[]> => {
    const response = await api.get("/cars");
    return response.data;
};

export const getCarById = async(id: number): Promise<CarDetails> => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
};

export const createCar = async(data: CreateCarRequest): Promise<CarDetails> => {
    const response = await api.post("/cars", data);
    return response.data;
};

export const updateCar = async(id: number, data: UpdateCarRequest): Promise<CarDetails> => {
    const response = await api.put(`/cars/${id}`, data)
        return response.data;
    
};

export const deleteCar = async(id: number): Promise<void> => {
    await api.delete(`/cars/${id}`);
}