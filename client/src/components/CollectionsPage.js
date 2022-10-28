import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CollectionCard from "./CollectionCard";
import StarterPage from "./StarterPage";

const style = {
  "color": "black"
}

function CollectionsPage({ collections, setCollections }) {
  const history = useHistory();

  useEffect(() => {
    fetch("/collections").then((res) => {
      if (res.ok) {
        res.json().then((data) => setCollections(data))
      }
    });
  }, []);

  function routeToNewCollection() {
    history.push('/new_collection')
  }

  if (!collections || collections.length === 0) return <StarterPage />

  return (
    <div className="padding">
      <div className="flex-row-space-between">
        <h1 className="title">My Collections</h1>
        <button onClick={routeToNewCollection}>+ Create New Collection</button>
      </div>
      <div className="card-list">
        {collections.map(collection => <CollectionCard key={collection.id} collection={collection} />)}
      </div>
      <div className="footer flex-column-center">
        <Link to='/about' style={style}>about</Link>
      </div>
    </div>
  )
}

export default CollectionsPage;