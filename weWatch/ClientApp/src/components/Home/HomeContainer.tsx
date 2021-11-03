import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const HomeContainer: FC<{}> = () => {
    return (
        <>
            <Link to={`/login`}>Login page</Link>
            <h2>HomePage</h2>
        </>
    )
}

export default HomeContainer;