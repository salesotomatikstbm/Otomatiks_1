import React from 'react'
import User from './user'
import Search from './search'
import Category from './category'
import RecentPost from './recentPost'
import Tags from './tags'

const Sidebar = () => {
    return (
        <div>
            <User />
            <Search />
            <Category />
            <RecentPost />
            <Tags />
        </div>
    )
}

export default Sidebar