import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import settings from "../settings";

const socialTags = ({
  type,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
}) => {
  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:image:src", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: type },
    { name: "og:url", content: url },
    { name: "og:image", content: image },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: settings && settings.meta && settings.meta.title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
    // {
    //   name: "theme-color",
    //   content: "#78c2ad",
    // },
  ];

  return metaTags;
};

const SEO = (props) => {
  const {
    title,
    author,
    language,
    keywords,
    robots,
    rating,
    description,
    image,
  } = props;
  return (
    <Head>
      <title>
        {title === SEO.defaultProps.title ? title : `${title} | Birthdayy`}
      </title>
      <meta name="name" content={title} key="title" />
      <meta itemProp="description" content={description} key="description" />
      <meta itemProp="author" content={author} key="author" />
      <meta itemProp="language" content={language} key="language" />
      <meta itemProp="keywords" content={keywords} key="keywords" />
      <meta itemProp="robots" content={robots} key="robots" />
      <meta itemProp="rating" content={rating} key="rating" />
      <meta itemProp="image" content={image} key="image" />
      <meta itemProp="theme-color" content="##78c2ad" key="theme-color" />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} itemProp={name} content={content} />;
      })}
      <meta name="name" content={title} key="title" />
      <meta name="description" content={description} key="description" />
      <meta name="author" content={author} key="author" />
      <meta name="language" content={language} key="language" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta name="robots" content={robots} key="robots" />
      <meta name="rating" content={rating} key="rating" />
      <meta name="image" content={image} key="image" />
      <meta name="theme-color" content="#78c2ad" key="theme-color" />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
    </Head>
  );
};

SEO.defaultProps = {
  url: "/",
  type: "website",
  title: settings && settings.meta && settings.meta.title,
  author: settings && settings.meta && settings.meta.author,
  language: settings && settings.meta && settings.meta.language,
  keywords: settings && settings.meta && settings.meta.keywords,
  robots: settings && settings.meta && settings.meta.robots,
  rating: settings && settings.meta && settings.meta.rating,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
};

SEO.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
