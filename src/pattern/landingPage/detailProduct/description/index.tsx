import React from 'react';
import './index.scss'; 
export default function Description({
  content
}: {
  content: any;
}) {
  return (
    <div className="description-box">
      {content.map((e:any) => <p className='content'>{e}</p>)}
    </div>
  );
}
