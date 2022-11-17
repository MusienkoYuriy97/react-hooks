import React, { Fragment, useContext } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const { loading, users } = useContext(GithubContext)
    console.log(users)
    return (
        <Fragment>
            <Search />
            <div className='row'>
                {loading
                    ? <p className='col text-center'>Загрузка...</p>
                    : (users && users.length !== 0
                        ? users.map(user => (
                            <div className='col-sm-4 mb-4' key={user.id}>
                                <Card user={user} />
                            </div>
                        ))
                        : <div className='col text-center'>Start your search</div>)

                }
            </div>
        </Fragment>
    )
}
