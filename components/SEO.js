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
      <meta itemProp="name" content={title} />

      <meta itemProp="description" content={description} />
      <meta itemProp="author" content={author} />
      <meta itemProp="language" content={language} />
      <meta itemProp="keywords" content={keywords}></meta>
      <meta itemProp="robots" content={robots} />
      <meta itemProp="rating" content={rating} />
      <meta itemProp="image" content={image} />
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
