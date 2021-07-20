<h1>Next Booklist</h1>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


## Table of Contents
- [Features](#features)
- [Example Code](#example-code)
- [Philosophy](#philosophy)

## Features
- __Clear And Understandable:__ It is very clear what is going on within the project, everything has its own title and content
- __Code is Readable:__ The layout of the code is quite straight forward, so other developers wont find it hard to modify it. 
- __Tailwind CSS:__ Pages med with Tailwind CSS which make it super easy to style code.
- __Next JS:__ Made with Next JS which is a framework on top of react which like Tailwind CSS makes it so much easier to write code, especially with Server Side Rendering(SSR).
- 

## Example Code
```jsx

<div className={styles.container}>
      <div className={styles.genre}>
        <button
          className='bg-red-300 p-2 my-2 hover:bg-red-200'
          onClick={() => setShowAdventure(handleShowAdventure)}
        >
          {showAdventure ? 'Hide Adventure Books' : 'Show Adventure Books'}
        </button>
        {showAdventure && (
          <Fragment key={Books.id}>
            <h1 className='text-2xl'>Adventure Books</h1>
            <GenreBookComponent genre={adventure} />
            <Link href='/adventure'>
              <a className='bg-blue-300 p-2 hover:bg-blue-200'>
                View Only Adventure Books{' '}
              </a>
            </Link>
          </Fragment>
        )}
      </div>
```


## Philosophy
I beleive progamming and coding should be available for everyone as it is awesome with what you can do with it. 
From creating games, to developing websites, programming has a world of its own. I truly beleive that each and
every single one of us has their own place in programming, even if it just to get the basics out of the way.
Not to mention, learning code will allow you to access all types of careers, no matter which industry. A basic 
example is the finance and bankig industry. You may think, how does programming have anythig to do with them, but
if you notice, most of the time, that accountants behind the till use a computer to store most of their data, how 
think that was create - with programming. This is a basic and simple idea of where programming is used anywhere and
everywhere! 
