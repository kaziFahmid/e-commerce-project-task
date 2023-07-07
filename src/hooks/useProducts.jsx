import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useProducts() {

    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const res = await fetch('https://e-commerce-server-hazel.vercel.app/products')
          return res.json()
        },
      })
  return [refetch,products]
}
