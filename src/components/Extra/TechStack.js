import React from 'react';

const BlogBox = ({ imageSrc, title, date, author }) => (
  <div className="box" data-aos="fade-up" data-aos-delay="150">
    <div className="image">
      <img src={imageSrc} alt="" />
    </div>
    <div className="content">
    <a href='' className="link">{title}</a>
      <div className="icon">
        <a href="#"><i className="fas fa-clock"></i> {date}</a>
        <a href="#"><i className="fas fa-user"></i> by {author}</a>
      </div>
    </div>
  </div>
);

const TechStack = () => {
  const blogData = [
    {
      imageSrc: 'images/angular-370x370.png',
      title: 'Angular',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/aws-370x370.png',
      title: 'AWS',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/dotnet-1-370x370.png',
      title: 'Dot Net',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/ex1-370x370.png',
      title: 'EX',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/figma-370x370.png',
      title: 'Figma',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/flutter-370x370.png',
      title: 'Flutter',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/js_new-370x370.png',
      title: 'JS',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/js-370x370.png',
      title: 'Node',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/mongo-370x370.png',
      title: 'Mongo',
      date: '21st may, 2023',
      author: 'Admin',
    },
   
    {
      imageSrc: 'images/mysql-370x370.png',
      title: 'My SQL',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/reactblue-370x370.png',
      title: 'React',
      date: '21st may, 2023',
      author: 'Admin',
    },
    {
      imageSrc: 'images/v-370x370.png',
      title: 'Vue',
      date: '21st may, 2023',
      author: 'Admin',
    },
   
  
  ];

  return (
    <>
      <section className="blogs" id="techstack">
        <div className="heading">
          <h1>Our Technical Forte</h1>
        </div>

        <div className="box-container">
          {blogData.map((blog, index) => (
            <BlogBox
              key={index}
              imageSrc={blog.imageSrc}
              link={blog.link}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              author={blog.author}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStack;
