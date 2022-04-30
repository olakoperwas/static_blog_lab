import { graphql } from 'gatsby'
import React from "react";
import Layout from "../components/layout" 
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
const Fun = ({ data }) => {
 const post = data.markdownRemark;
 const image = getImage(post.frontmatter.featuredImage)
 console.log(image)
 console.log(post)
 return (
 <Layout>
 <h1>{post.frontmatter.title}</h1>
 <StaticImage src="https://i2.wp.com/mindcoaching.pl/wp-content/uploads/2018/05/mindcoaching.pl-30-najpopularniejszych-obraz%C3%B3w-dziewczyna.jpg?resize=362%2C518" alt="A kitten" />
 <GatsbyImage image={image} alt={post.frontmatter.author}/>

 <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} <span style={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span>
 </h4>
 <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
 </Layout>
 );
}
export default Fun;
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        featuredImage {
          childrenImageSharp {
            gatsbyImageData(width: 200, formats: PNG)
          }
        }
      }
    }
  }
`;  