import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react';
import AddLink from '../components/AddLink';

const Home: NextPage = () => {

  const [id, setId] = useState("");

  const baseUrl = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <Head>
        <title>🔗 Kusari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl bg-white rounded-md w-full p-6 ">

        <h1 className='font-semibold text-2xl'>🔗 Kusari</h1>
        <p className='text-gray-500 text-sm'>A simple URL shortener</p>
        <AddLink id={id} setId={setId} />

        {id && (
          <div className='bg-fuchsia-50 flex items-center justify-center w-full text-xl text-cyan-800 mt-4 p-3 rounded-sm'>
            <a href={`${baseUrl}/${id}`} target="_blank">{`${baseUrl}/${id}`}</a>
          </div>
        )}

      </div>

    </div>
  )
}

export default Home
