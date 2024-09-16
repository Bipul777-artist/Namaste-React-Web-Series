import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="w-full h-screen">


                {(cartItems.length !== 0) ? 

                    
                    <div className="bg-gray-300 grid grid-cols-3 gap-3">
                        <div className="col-span-2">
                            
                            <div className = "ml-12 mt-12 mb-4 border bg-white shadow-lg pt-4 pl-5 ">
                            
                                <h3 className="ml-12 mt-6 ">Add a delivery address</h3>
                                <p className= " ml-12 mt-1 font-semibold text-gray-400">You seem to be in the new location.</p>

                                <div className="border border-dotted border-black rounded w-2/5 p-8 my-12 ml-12 hover:shadow-xl">
                                    <h4 className="font-semibold pb-3">Add New Address</h4>
                                    <btn className=" text-center text-sm font-bold uppercase border border-green-400 text-green-300 py-2 px-3 ml-3 my-6 cursor-pointer">Add New</btn>
                                </div>

                            </div>

                            <div className=" ml-12 border bg-white shadow-lg py-4 pl-5">
                                <h3>Payments</h3>
                            </div>
                        </div>
                        <div className="bg-gray-300 mt-12 mr-4 ">
                            {cartItems.map((data) => {
                            
                            
                            return (
                                
                                <div>
                                    
                                    <div className="bg-white w-full p-2 ">
                                    
                                        <h4></h4>
                                        
                                        <div className="flex justify-between">
                                           
                                            <h2>{data?.card?.info?.name}</h2>
                                            <p>{data?.card?.info?.price/100}</p>
                                           
                                            
                                            
                                        </div>
                                    
                                    </div>

                                </div>
                                
                                
                            )
                            })}
                            
                            
                        </div>
                        
                    </div> : 

                    <div className=" text-center w-full py-auto my-40 mx-auto h-28">
                        
                        <h1 className="font-bold text-gray-500 ">Your Cart is empty, please add something.</h1>
                        <p className="text-gray-800 my-6">You can go to home page to view more restaurants</p>
                        <Link to="/"><btn className="bg-orange-500 px-4 py-4 min-w-16 text-white rounded cursor-pointer uppercase">See More Restaurants</btn></Link>
                    
                    </div>
                }
            
            
        </div>
        
    )
}

export default Cart;