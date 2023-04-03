import React, { useEffect, useState } from 'react';
import classes from './RollTag.module.scss';

const RollTag = ({ role }) => {
  const [roleName, setRoleName] = useState([]);

  useEffect(() => {
    if (role === 'Co-op Manager') {
      return setRoleName('Co-opManager');
    } else {
      return setRoleName(role);
    }
  }, []);

  // console.log(roleName);

  return (
    <>
      <div className={classes[`${roleName}_tag_body`]}>
        <p>{role}</p>
      </div>
    </>
  );
};

export default RollTag;
