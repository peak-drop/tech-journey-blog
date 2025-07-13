'use client';

import React, {useCallback} from 'react';
import {Info} from "@/lib/rick-and-morty";
import {useRouter} from "next/navigation";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import invariant from "tiny-invariant";
import {useDebounce} from "@/utils/use-debounce";

interface RickAndMortyInfoProps {
  info?: Info | null;
  search: string;
  page: number;
}

const RickAndMortyInfo: React.FC<RickAndMortyInfoProps> = (props) => {
  const {info, search, page} = props;
  const {push} = useRouter()

  const fn = useCallback((s: string) => {
    const params = new URLSearchParams({page: '1', search: s})
    push(`/rick-and-morty?${params}`)
  }, [push]);

  const debouncedSearch = useDebounce(fn, 500);

  function handlePageChange(n?: number | null) {
    invariant(n, 'Invalid page change');
    const params = new URLSearchParams({page: n.toString(), search})
    push(`/rick-and-morty?${params}`)
  }

  return (
      <div className={'flex flex-col items-center mb-10'}>
        {info ? <code>Total Count: {info?.count}</code> : <code>Loading...</code>}
        <div className={'flex items-center gap-4 p-4'}>
          <button className="btn btn-circle" disabled={!info?.prev} onClick={() => {
            handlePageChange(info?.prev)
          }}>
            <FaAngleLeft size={24}/>
          </button>
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Search for a character" className="input input-bordered w-full max-w-xs"
                   onChange={(e) => {
                     debouncedSearch(e.target.value)
                   }
                   }/>
          </div>
          <button className="btn btn-circle" disabled={!info?.next} onClick={() => {
            handlePageChange(info?.next)
          }}>
            <FaAngleRight size={24}/>
          </button>
        </div>
        {info ? <code>Page: {page}/{info?.pages}</code> : <code>Loading...</code>}
      </div>
  )
};

export default RickAndMortyInfo;
