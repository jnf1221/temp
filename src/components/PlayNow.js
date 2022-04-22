import React from 'react';
import {Link} from 'react-router-dom';

function PlayNow({link, label}) {
  return(
    <Link className="btn btn-secondary form-control" to={ link }>{ label }</Link>
  )
}

export default PlayNow;