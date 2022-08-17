import React from 'react';
import './ContentCollection.scss';
import { ContentSkeleton } from './ContentSkeleton';

export const ContentCollection = () => {
  return (
    <table className='content-collection'>
      <colgroup>
        <col className='content-collection__accounts'></col>
        <col className='content-collection__description'></col>
        <col className='content-collection__date'></col>
        <col className='content-collection__labels'></col>
        <col className='content-collection__status'></col>
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
      <ContentSkeleton />
    </table>
  );
};
