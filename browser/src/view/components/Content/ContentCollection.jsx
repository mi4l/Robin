import React from 'react';
import './ContentCollection.scss';
import { Skeleton } from '../Skeleton/Skeleton';

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
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
        </tr>

        <tr>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
        </tr>

        <tr>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
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
