"use client";

import { useState } from "react";

type AddParams = {
  id: string
  setId: React.Dispatch<React.SetStateAction<string>>
}

export const Add: React.FC<AddParams> = async ({ id, setId }) => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (url.trim()) {
      const config: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      }
      setLoading(true)
      try {
        const response = await fetch('/api/add', config)
        setId(await response.json())
      } catch (error: any) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: error?.message || 'Please try again.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg border rounded border-white p-2">
        <input
          required
          name="url"
          autoComplete="url"
          placeholder="Enter your URL"
          className="sm:w-2/3 bg-transparent px-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6 border-0 focus:rounded"
          type="text"
          onChange={(e) => setId(e.target.value)}
        />
        <button
          type="submit"
          className="sm:w-1/3 sm:text-center inline-block transition-all space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80  hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta"
        >
          <span>Create</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </form>
  );
};
