import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import './index.css'
import Layout from "../components/layout"
const IndexPage = ({data}) => {
 console.log(data)
 return(
 <Layout>
 {data.allMarkdownRemark.edges.map(({node}) => (
 <div key={node.id} className="article-box">
 <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
   <h3 className="title">{node.frontmatter.title}</h3></Link>
 <p className="author">Author: <i>{node.frontmatter.author}</i></p>
 <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
 <p className="excerpt">{node.excerpt}</p>
 </div>
 ))}
 </Layout>
 )
}
export default IndexPage
export const query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          author
          date
          title
          featuredImage {
            childrenImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
}
` 