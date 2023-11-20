import axios from "axios";
import { useEffect, useState } from "react";

function CategoryApi() {
  const[categories, setCategories] =  useState([])

  useEffect(() => {

    const getCategories = async() => {
        const res = await axios.get('/publicevent/event_categories')

        setCategories(res.data.categories)
    }

    getCategories()


  }, [])

  return{
    categories: [categories, setCategories]
  }

}

export default CategoryApi