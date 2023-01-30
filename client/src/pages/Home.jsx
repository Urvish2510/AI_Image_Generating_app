import React, { useState } from "react";

import { Card, Loader, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
      </div>
    </section>
  );
};

export default Home;
