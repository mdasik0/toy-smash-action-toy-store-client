const Blog = () => {
  return (
    <div className="text-md:pb-6 md:pt-10 gap-5 flex flex-col px-3 mx-0 md:mx-28">
      {/* app starts */}

      {/* app ends */}
      <div className="p-6 border-2 mb- border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="text-sm font-bold">
          An access token and refresh token are commonly used in authentication
          systems to provide secure access to protected resources. An access
          token is a credential that is issued by an authentication server after
          a user successfully authenticates. It represents the user&apos;s
          authorization to access specific resources or perform certain
          actions.A refresh token is a long-lived credential that is also issued
          by the authentication server alongside the access token. <br /> Access
          tokens should be stored securely on the client-side to prevent
          unauthorized access.Refresh tokens are long-lived and contain
          sensitive information, so they require more secure storage. They are
          commonly stored in an HTTP-only cookie, which makes them less
          vulnerable to cross-site scripting (XSS) attacks.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          Compare SQL and NoSQL databases?
        </h1>
        <p className="text-sm font-bold">
          SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are
          two different types of database management systems, each with its own
          characteristics.SQL databases enforce data integrity and consistency
          through ACID (Atomicity, Consistency, Isolation, Durability)
          properties. SQL databases use a relational data model, where data is
          organized into tables with predefined relationships between them. SQL
          databases are typically vertically scalable, meaning they can handle
          increased load by running on more powerful hardware. NoSQL databases
          have dynamic and unstructured data models, enabling easy storage and
          retrieval of data without rigid requirements.NoSQL databases use
          various data models, such as key-value, document, columnar, or graph.
          NoSQL databases are designed for horizontal scalability. They can
          distribute data across multiple servers or nodes, allowing them to
          handle large amounts of data and high traffic loads. New fields or
          structures can be added without disrupting existing data.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          What is express js? What is Nest JS ?
        </h1>
        <p className="text-sm font-bold">
          Express.js is a popular, fast, and minimalist web application
          framework for Node.js. It provides a robust set of features for
          building web applications and APIs. Express.js simplifies the process
          of creating server-side applications by providing a simple and
          intuitive API for handling HTTP requests, routing, middleware, and
          more. <br />
          NestJS, on the other hand, is a progressive Node.js framework for
          building efficient, scalable, and maintainable server-side
          applications. It takes inspiration from Angular and combines elements
          of both object-oriented programming (OOP) and functional programming
          (FP) to provide a robust and modular architecture.
        </p>
      </div>
      <div className="p-6 border-2 border-slate-300 rounded ">
        <h1 className="font-bold mb-4 text-2xl text-black ">
          What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-sm font-bold">
          In MongoDB, the aggregate operation is a powerful tool used for
          processing and transforming data within a collection. It allows you to
          perform complex data operations and aggregations, similar to the GROUP
          BY and aggregate functions in SQL. The aggregate operation uses a
          pipeline concept where you can specify multiple stages to transform
          and manipulate the data.The stages are executed in the order they are
          defined in the pipeline, passing the results from one stage to the
          next.MongoDB provides a variety of stages to perform different
          operations, such as filtering, grouping, sorting, projecting, joining,
          and more.As the data moves through the pipeline stages, each stage
          modifies or adds to the data, transforming it based on the specified
          operations. Each stage generates intermediate results, which are
          passed to the subsequent stages until the final result is obtained.
        </p>
      </div>
    </div>
  );
};

export default Blog;
