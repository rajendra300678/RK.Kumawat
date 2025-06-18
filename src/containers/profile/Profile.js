import React, { useState, lazy, Suspense } from "react";
import Loading from "../loading/Loading";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState([]);

  function setProfileFunction(array) {
    setrepo(array);
  }

  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard data={prof} />
    </Suspense>
  );
}
