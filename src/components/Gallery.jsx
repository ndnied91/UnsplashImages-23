import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';
import Image from './Image';

import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export const Gallery = () => {
  const { searchTerm, page, setPage } = useGlobalContext();
  console.log(searchTerm);

  const response = useQuery({
    queryKey: ['images', searchTerm, page],
    queryFn: async () => {
      const result = await axios.get(
        `${url}&per_page=9&query=${searchTerm}&page=${page}`
      );
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  console.log(results);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <div>
      <section className="image-container">
        {results.map((item) => {
          return <Image key={item.id} {...item} />;
        })}
      </section>

      <section className="navBtns">
        {page > 1 ? (
          <button
            className="btn"
            onClick={() => {
              let currentPage = page;
              let updatedPage = currentPage - 1;
              setPage(updatedPage);
              response.refetch();
            }}
          >
            <GrLinkPrevious />
          </button>
        ) : null}

        <button
          className="btn"
          onClick={() => {
            let currentPage = page;
            let updatedPage = currentPage + 1;
            setPage(updatedPage);
            response.refetch();
          }}
        >
          {' '}
          <GrLinkNext />
        </button>
      </section>
    </div>
  );
};

export default Gallery;
