import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from './layout'
import { Link } from './link'
import Logo from '../../static/logo.svg'

import classes from '../styles/index.module.sass'

export default ({ lang = 'en' }) => {
    return (
        <StaticQuery
            query={query}
            render={data => {
                const chapters = data.allMarkdownRemark.edges
                    .filter(({ node }) => node.fields.lang === lang)
                    .map(({ node }) => ({
                        slug: node.fields.slug,
                        title: node.frontmatter.title,
                        description: node.frontmatter.description,
                    }))
                return (
                    <Layout isHome lang={lang}>
                        <Logo className={classes.logo} />
                        <section>
                                <h1 className={classes.subtitle}><center>Data Science Toolbox</center></h1>
                            <div className={classes.introduction}>

                                        <p>
                                        <center>
                                        Welcome to The Data Science Toolbox!  This course is part of the <u><strong><a href="https://extendedlearning.ubc.ca/programs/key-capabilities-data-science">Key Capabilities for Data Science program</a></strong></u> and covers topics related to workflows, plateforms and tools used in data analysis.
                                        </center>
                                         </p>
                                         <p> 
                                         <center>
In this course, we will dive into the world of data science tools and utilities. While these are not strictly required for data analysis, they are necessary for efficient, reproducible, and collaborative data science practices, and are all important building blocks for a successful and sustained data science career.
                                        </center>
                                        </p>
                             </div>
                    </section>
                        {chapters.map(({ slug, title, description }) => (
                            <section key={slug} className={classes.chapter}>
                                <h2 className={classes.chapterTitle}>
                                    <Link hidden to={slug}>
                                        {title}
                                    </Link>
                                </h2>
                                <p className={classes.chapterDesc}>
                                    <Link hidden to={slug}>
                                        {description}
                                    </Link>
                                </p>
                            </section>
                        ))}
                    </Layout>
                )
            }}
        />
    )
}

const query = graphql`
    {
        allMarkdownRemark(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { type: { eq: "chapter" } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                        lang
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`
