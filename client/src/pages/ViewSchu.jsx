import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function ViewSchu() {

    const { currentUser } = useSelector((state) => state.user);
    const currentId = currentUser ? currentUser._id : null;
    const [schedul, setschedul] = useState([]);
    console.log(schedul)



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/user/schedul/${currentId}`);
            const data = await response.json();
    
            console.log('data', data);
    
    
    
    
            if (data.length > 0) {
                setschedul(data);
    
              
    
            } else {
                setschedul([]);
              
            }
          } catch (error) {
            console.error("Error fetching bid data:", error);
          }
        };
    
        fetchData();
      }, [currentId]);


  return (
    <div>ViewSchu
  <div>



  {schedul ? (
            <>

              <div className="overflow-y-auto max-h-[350px]">
                {schedul.map((sche) => (

                  <div key={sche._id} className='bg-white shadow-md rounded-md lg:w-full lg:h-20 w-full h-16 mt-4 '>

                    <div className='flex justify-center items-center gap-4 '>
        

                      <div className="font-extralight text-sm mb-2 truncate w-32">Name:{sche.name}</div>
                      <p className="text-gray-700  font-extralight text-sm">Phone.{sche.phone}</p>
                      <p className="text-gray-700  font-extralight text-sm">Time:{sche.time}</p>
                      <p className="text-gray-700  font-extralight text-sm">Email:{sche.Email}</p>
                      <p className="text-gray-700  font-extralight text-sm">Date:{sche.date}</p>
                      <button >Reschedule</button>
                      <button >Cancel</button>
                    </div>
                  </div>


                ))}
              </div>

              

             
              

             








            </>
          ) : (
            <p className='flex justify-center items-center'>Loading...</p>
          )}

  </div>




    </div>
  )
}
