import React from 'react'
import Card from '../components/blog/Card'
import { useDispatch, useSelector } from "react-redux"
import {  getBlogsData } from "../features/blogApiSlice"
import { useEffect } from "react"
const Dashboard = () => {
  const dispatch = useDispatch()
  const { blogsData } = useSelector((state) => state.blogsApi)

  //? News componenenti DOM'a basildiktan hemen sonra API istegini baslat
  useEffect(() => {
    dispatch(getBlogsData())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className="mt-12 mx-auto px-4 ">
    <div className="text-center">
      <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
      <p className="mt-3 text-gray-500">
        Blogs that are loved by the community. Updated every hour.
      </p>
    </div>
    <div className="mt-12 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <Card blogsData={blogsData}/>
      </div>
    </section>
  )
}

export default Dashboard