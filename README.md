# Algolia InstantSearch Take Home Demo


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Github Pages Live](#gh-pages)

## Introduction

This repository demonstrates the usage of Algolia's InstantSearch Dashboard, showcasing various widgets to create a powerful and customizable search experience.


## Features

Widgets Used

 - InstantSearch

        The main wrapper component that initializes the InstantSearch functionality. 
        Added insights to send back events to algolia.

 - SearchBox

        A search input box that allows users to enter their search queries. 
        Set autofocus and placeholder.

 - CurrentRefinements

        When using the RefinementList added ability to show current 
        refinements if you wanted to remove refinement filtering.      

 - Hits

        Displays search results in a list. 
        The Hit function was modified to send an OnClick event 
        for One-Click Purchasing for conversion data.

 - Highlight

        Highlights the matching terms in the search results.

 - RefinementList

        Refinement was added to the "brand" attribute 
        (modification of the algolia dashboard facet was necessary)

 - Pagination

        Enables users to navigate through different pages of search results.

 - CurrentRefinements

        Shows the currently applied refinements by brand

 - HitsPerPage

        Allows users to change the number of hits displayed per page.  
        The options are 6 or 12 considering the grid is set to display 3 items per row.

 - Tailwind

        Added tailwind for additional CSS modifications

## Getting Started

### Prerequisites

- algoliasearch
- react-instantsearch
- tailwindcss

### Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/dborges/algolia-dborges-demo.git

### Github Pages Live 

       https://dborges.github.io/algolia-dborges-demo