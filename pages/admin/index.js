import React, {useEffect, useState} from 'react'
import Login from '../../components/pages/login'
import { parseCookies } from '../../helpers/parseCookies'
import Head from "next/head"
import AdminLayout from '../../components/AdminLayout'
import axios from 'axios'
import AdminArticleCard from '../../components/AdminArticleCard'

export default function Index({cookies, articles}) {
    if(cookies){
        return (
            <div>
                <Head>
                    <title>Admin Page</title>
                </Head>
                <AdminLayout>
                    <h1>Articles</h1>
                    <main>
                        {articles.map((article)=>(<AdminArticleCard article={article}/>))}
                    </main>
                </AdminLayout>
            </div>
        )
    }else{
        return <Login/>
    }
}

Index.getInitialProps = async ({req}) =>{
    const cookies = parseCookies(req)
    const res = await axios.get('http://localhost:3001/articles?published=true')
    return {
        cookies: cookies.tcm_user,
        articles: res.data
    }
}