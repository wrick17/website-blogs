import React from 'react';
import { Link } from 'gatsby';
import Layout from '@components/layout';
import { graphql } from 'gatsby';
import Image from '@components/image';
import { defaultImage } from '@common';

const Blogs = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout
      headerProps={{ level: 2 }}
      meta={{
        title: 'Blogs',
        description: 'Set of blogs where I rant about stuff I like',
        link: 'https://www.wrick17.com/blogs/',
      }}
    >
      <h1>Blogs</h1>
      <div className="blogs">
        {posts.map((post) => {
          const {
            node: {
              id,
              frontmatter: { serial, slug, title, image, description },
            },
          } = post;
          const imageSrc = image
            ? image.indexOf('http') === 0
              ? image
              : require(`@images/${image}`)
            : defaultImage;
          return (
            <Link className="block blog no-link-color" to={slug} key={id}>
              <div className="content-wrapper">
                <div className="serial">#{serial}</div>
                <div className="details">
                  <div className="blog-title">{title}</div>
                  <div className="blog-description">{description}</div>
                </div>
              </div>
              <div className="image-wrapper">
                <Image src={imageSrc} alt="f00" inline />
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            slug
            image
            serial
          }
        }
      }
    }
  }
`;
export default Blogs;
