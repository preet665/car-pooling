import { RequestHandler } from "express";
import categoryModel from '../../model/admin/vehicleCategoryModel';
import passengerModel from "../../model/passengerModel";
import driverModel from "../../model/driver/driverModel";
import fileUploader from "../../cloudinery/fileUploader";

export const addCategory: RequestHandler = async(req,res) => {
    const {name,capacity,discription,img,rate} = req.body;
    try{
    fileUploader(img)
    .then(async(image) => {
        const categories = await new categoryModel({
            name,
            capacity,
            discription,
            rate,
            image,
        }).save()
        console.log(categories);
        
        if (categories){
            return res.status(200).json({status: true})
        }else{
            return res.status(200).json({status: false, err:'invalid please try again'})
        }
    })
    .catch((error) => {
       return res.status(200).json({status: false, err:error})
    })
}catch (err) {
    console.log(err);
    
}

}
export const getallcategory: RequestHandler =async (req,res) => {
    try{
        const categories = await categoryModel.find();
        res.status(200).json(categories)
    }
    catch{
        res.status(500).json({ message: "Error retrieving categories" });
    }
    
}
export const getallpassengers: RequestHandler = async(req,res) => {
    try{
        const passengers = await passengerModel.find();
        res.status(200).json(passengers);
    }
    catch{
        res.status(500).json({ message: "Error retrieving passengers" });
    }
}

export const getalldrivers: RequestHandler = async(req,res) => {
    try{
        const drivers = await driverModel.find();
        res.status(200).json(drivers);
    }
    catch{
        res.status(500).json({ message: "Error retrieving drivers" });
    }
}