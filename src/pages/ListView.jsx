import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store)
  const [itemOffset, setItemOffset] = useState(10);
  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = state?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state?.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='p-4'>
      <table className='table table-dark table-hover mt-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((fly) => (
            <tr>
              <td>{fly.id}</td>
              <td>{fly.code}</td>
              <td>{fly.lat}</td>
              <td>{fly.lng}</td>
              <td>
                <button onClick={() => openModal(fly.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        className='pagination'
        nextLabel="ileri >"
        previousLabel="< geri"
        activeClassName='active' />
    </div>
  )
}

export default ListView
