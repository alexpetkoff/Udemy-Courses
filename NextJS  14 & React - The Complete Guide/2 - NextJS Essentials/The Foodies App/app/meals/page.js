import React from 'react'
import Link from 'next/link';

const MealsPage = () => {
    return (
        <div>
            <h1>This is meals page!</h1>
            <Link style={{ color: "white" }} href="/meals/share" >Share</Link>
        </div>
    )
}

export default MealsPage;