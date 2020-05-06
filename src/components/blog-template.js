import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import Layout from './layout';
import face from '@images/wrick.png';

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout
      meta={{
        title: mdx.frontmatter.title,
        description: mdx.frontmatter.description,
        image: mdx.frontmatter.image,
        link: `https://www.wrick17.com${mdx.frontmatter.slug}`,
      }}
      headerProps={{ name: `# ${mdx.frontmatter.serial}`, level: 3 }}
    >
      <div className="blog">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>

      <div className="about-me">
        <div className="my-face">
          <img src={face} alt="wrick17" className="face-logo" />
        </div>
        <p className="home-content">
          Hi, I am Pratyush, a spider on the Web. When I am not{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>-ing to JS, I am either listening to Music, Gaming or watching
          Anime.
        </p>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        serial
        title
        description
        image
        slug
      }
    }
  }
`;
