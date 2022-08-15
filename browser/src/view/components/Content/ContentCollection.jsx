import React from 'react';
import './ContentCollection.scss';

export const ContentCollection = () => {
  return (
    <table>
      <colgroup>
        <col className='accounts'></col>
        <col className='description'></col>
        <col className='date'></col>
        <col className='labels'></col>
        <col className='status'></col>
      </colgroup>
      <thead>
        <tr>
          <th>Accounts</th>
          <th>Description</th>
          <th>Date</th>
          <th>Labels</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
        </tr>

        <tr>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
        </tr>

        <tr>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
          <td>
            <div className='skeleton'></div>
          </td>
        </tr>

        <tr>
          <td>[Previous]</td>
          <td></td>
          <td>Page 1 of 10</td>
          <td></td>
          <td>[Next]</td>
        </tr>
      </tbody>
    </table>
  );
};
