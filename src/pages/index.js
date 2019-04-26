import React from "react";
import { graphql } from "gatsby";

const HomePage = ({data}) => { 
  const {title, image, date, content} = data.contentfulHomePage
  return (
    <div>
      <h1>{title}</h1>
      <small>Created on {date}</small>
      <img src={image.file.url} alt={image.title} />
      <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
    </div>
  );
}

export const query = graphql`
  query {
    contentfulHomePage {
      createdAt
      contentful_id
      title
      date
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
        title
      }
    }
  }
`;

export default HomePage;
