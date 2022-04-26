/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import DragonType from "../types/DragonType";

const URL = process.env.REACT_APP_API_PATH


export default function useApi ():any{

   const [data, setData] = useState<any[]>([])
   const [isLoading, setIsLoading] = useState(false);
   
   const fetchData = useCallback(async () => {
     setIsLoading(true)

     try{
       const response = await fetch(URL!)
       if(!response.ok){
         throw new Error('Something went wrong!')
       }
      const data = await response.json() 

      const loadedTasks:any = []

      data.forEach((data:any) => loadedTasks.push(data))
      setData(loadedTasks)
     }catch(err){
      //  console.log(err)
     }
     setIsLoading(false)
   },[])

   useEffect(() => {
     fetchData()
   },[fetchData])


   const deleteData = (id:string) => {
     fetch(`${URL}/${id}`, {method:'DELETE'})
   }

   const postData = (item: DragonType) => {
     fetch(URL!, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })
    //  necessário por conta que mockapi reescreve id enviado
     .then(() => fetchData())
   }

   const putData = (item:DragonType) => {
     fetch(`${URL}/${item.id}`, {
       method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })

   }

   const getItem = async (id:string) => {
       const response = await fetch(`${URL}/${id}`)
       const data = await response.json()
       return data
   }

   
    return { data, loading: isLoading, deleteData, postData, putData, getItem, fetchData }

}