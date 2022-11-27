import { createGlobalStyle } from "styled-components/macro";

const BREAKPOINTS = {
  tabletMin: 768,
  laptopMin: 1100,
  desktopMin: 1440,
};
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

const GlobalStyles = createGlobalStyle`



*, *::before, *::after {
  box-sizing: border-box;
}
  
html {
  --14px: 0.875rem;
  --15px: 0.9375rem;
  --16px: 1rem;
  --17px: 1.0625rem;
  --18px: 1.125rem;
  --19px: 1.1875rem;
  --20px: 1.25rem;
  --21px: 1.3125rem;
  --28px: 1.75rem; 
  --32px: 2rem;
  --40px: 2.5rem;
  --56px: 3.5rem;
  --80px: 5rem;
  --88px: 5.5rem; 

  --bg-black: hsl(240, 14%, 11%); 
  --text-black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%); 
  --red: hsl(0, 93%, 64%); 
  --red-hover: hsla(0, 100%, 79%, 1);
  --black-hover: hsla(240, 12%, 30%, 1);
    
  --font : 'Commissioner', sans-serif; 
  --bold: 700;
  --extra-bold: 800; 
}


/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/

html, body, #root {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: var(--font);

}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}


/*
  9. Create a root stacking context
*/
#root {
  isolation: isolate;
 
}


h1, h2 , h3, h4 {
  font-weight: var(--extra-bold);
}

h1 {
    font-size: var(--40px);
    line-height: var(--40px);

   @media ${QUERIES.tabletAndUp} {
        font-size: var(--56px);
        line-height: var(--56px);
    }

   @media ${QUERIES.desktopAndUp} {
    font-size:  var(--88px) ;
    line-height: 88px;
   }   
}

h2 {
    font-size:  var(--32px);
    line-height: 40px;

    @media ${QUERIES.desktopAndUp} {
    font-size:  var(--56px) ;
    line-height: 64px;
   }   
}

h3 {
    font-size: var(--15px); 
    line-height: 25px;

    @media ${QUERIES.desktopAndUp} {
    font-size: var(--20px);
    line-height: 32px;
    }
 
}

h4 {
    text-transform: capitalize;
    font-size: var(--15px);
    color: var(--white);


    @media ${QUERIES.desktopAndUp} {
        font-size: var(--20px);
    }
   

}

p {
    font-size: var(--15px);
    line-height: 25px;
    color: var(--text-black);
    

    @media ${QUERIES.laptopAndUp} {
    font-size: var(--18px);
    line-height: 32px;
    }
}
 

`;

export default GlobalStyles;
