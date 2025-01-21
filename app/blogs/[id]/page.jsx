'use client'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {

    }

    useEffect(() => {
        fetchBlogData();
    }, [])

  return (
    <div>
        {params.id}
    </div>
  )
}

export default page