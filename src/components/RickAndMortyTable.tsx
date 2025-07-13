'use client';

import React from 'react';
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider, useQuery} from "@tanstack/react-query";
import {fetchCharacters} from "@/lib/rick-and-morty";
import {useSearchParams} from "next/navigation";
import RickAndMortyCharacter from "@/components/RickAndMortyCharacter";
import RickAndMortyInfo from "@/components/RickAndMortyInfo";

// Create a client
const queryClient = new QueryClient()

interface RickAndMortyTableProps {
}

const RickAndMortyTable: React.FC<RickAndMortyTableProps> = () => {
  const searchParams = useSearchParams()
  const initialPage = Number(searchParams.get('page'))
  const search = searchParams.get('search') || '';
  const page = isNaN(initialPage) ? 1 : initialPage;

  const {data} = useQuery({
    queryKey: ['characters', page, search],
    queryFn: async () => {
      return await fetchCharacters(page, search)
    }
  })

  return (
      <div className={'flex flex-col items-center'}>
        <RickAndMortyInfo info={data?.info} search={search} page={page}/>
        <div className={'flex'}>
          <div className={'flex-1'}>
            <ul className={'flex items-center justify-center flex-wrap mx-4'}>
              {data?.characters.map(c => {
                return (
                    <li key={c.id}>
                      <RickAndMortyCharacter character={c}/>
                    </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
  )
};

const Wrapper = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <RickAndMortyTable/>
      </QueryClientProvider>
  );
}
export default Wrapper;
