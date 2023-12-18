import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  Pagination,
  PoweredBy,
  CurrentRefinements,
  HitsPerPage,
} from "react-instantsearch";

// import { RangeSlider } from "./RangeSlider";
// RangeSlider was not providing the results I was expecting.  After adding it as a facet results where always 0,0.  Left these files in repo for future testing.

const searchClient = algoliasearch(
  "IP4HXXCSGB",
  "0bea32e2f82a0bada2570cc32a0f873c"
);

// Hit function that has the additional <Highlight> compontent set to the "name" attribute
// Added an OnClick function to track conversions on the "One-Click Purchase" button

function Hit({ hit, sendEvent }) {
  return (
    <div className="flex flex-col justify-between h-96 space-y-2">
      <div className="flex flex-col min-32">
        <img src={hit.image} alt={hit.name} className="h-48 object-contain" />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">
          <Highlight attribute="name" hit={hit} />
        </h3>
        <p>in {hit.categories[0]}</p>
        <p>${hit.price}</p>
      </div>
      <button
        className="flex flex-row p-2 justify-center border rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => sendEvent("conversion", hit, "Purchase With One-Click")}
      >
        One-Click Purchase
      </button>
    </div>
  );
}

// Main App Function that includes insights in the <instantSearch> widget
// Added autofocus and placeholder for <SearchBox> widget for better usability
//

function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="phones_db"
      insights={true}
    >
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold px-4 pt-4">Borges Technologies</h1>
        <div className="flex flex-col space-y-2 p-4">
          <SearchBox autoFocus={true} placeholder="Product Search" />
          <CurrentRefinements />
        </div>
        <div className="flex flex-row p-4 space-x-4 w-full">
          <div className="flex flex-col space-y-4">
            <HitsPerPage
              items={[
                { label: "6 hits per page", value: 6, default: true },
                { label: "12 hits per page", value: 12 },
              ]}
            />
            <RefinementList
              attribute="brand"
              searchable={true}
              searchablePlaceholder="Search brands"
              showMore={true}
            />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <Hits
              hitComponent={Hit}
              classNames={{
                list: "grid grid-cols-3 w-full gap-4",
              }}
            />
            <Pagination className="flex flex-row justify-center" padding={4} />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default App;
