## Container => Behavior & Data
## Presentational => Data & Display



### App


### GifListContainer

    # Data
        - API data (stored in state)

    # Behavior

        - Submit search form --> hit the API and setState
        - Get API
        - Store data in state
        - Send props to subcomponents (GifList as prop)

    # Display

        - Render GifSearch and GifList
        - GifSearch (callback to handle search)
        - GifList (images prop from state)



### GifList

    # Data
        - Gifs (returned from Container from API via props)

    # Behavior

       - None (presentational)

    # Display

        - The list of gif images


### GifSearch

    # Data
        - content of search

    # Behavior

       - Type in search input
       - Submit search form (need event handler but it will also need to update state of parent component via a function passed down as a prop)

    # Display

        - Form