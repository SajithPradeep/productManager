import React from 'react';
import '../styles/Blogs.css';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'How to Define Product KPIs',
      date: 'January 15, 2024',
      summary: 'Learn the importance of defining KPIs for your product and how to go about it.',
      link: '/blog/how-to-define-product-kpis',
    },
    {
      title: 'Agile vs Waterfall: Which is Better for Product Development?',
      date: 'February 20, 2024',
      summary: 'A deep dive into Agile and Waterfall methodologies and their impact on product management.',
      link: '/blog/agile-vs-waterfall',
    },
    {
      title: 'The Role of a Product Manager in a Tech Company',
      date: 'March 10, 2024',
      summary: 'An overview of the key responsibilities and challenges faced by Product Managers.',
      link: '/blog/role-of-product-manager',
    },
  ];

  return (
    <section id="blogs">
      <h2>My Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((blog, index) => (
          <div key={index} className="blog-post">
            <h3>{blog.title}</h3>
            <p><em>{blog.date}</em></p>
            <p>{blog.summary}</p>
            <a href={blog.link}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
