# Hippo JAMStack 11ty

From the [Super simple static sites, using JAMStack Lunch & Learn](https://docs.google.com/presentation/d/1CuBiBMRTaoqr2OYJhMOBNNJeaab2xesfPlGFDO6mnsE/edit#slide=id.g12b34c1ecd9_0_2)

Welcome to the monstrosity of combining the **Government Design System** with **Pokemon**. Here we learn how to render data from a static source as well as from a third party API.

## Installation and Setup Instructions

### CLI - Node v12 and above required
```sh
# Installation:
npm i

# Start development:
npm start

# Production build:
npm build
```

### View App:
Visit `localhost:8080` your browser.

### Create new pages:
For every file template you create (via Nunjucks, Markdown, 11ty.js etc.) within the `src` directory, a relative page will be generated in the `dist` directory, named after the filename of your choosing.

### Data source:
All data sources are located in `src/_data`. I have provided 3 sources 2 static and 1 from an API. Within your templates you'll find a for loop `{% for ** in ** f%}` where it reference the filename that's stored within `src/_data`.

### 11ty Config
The `.eleventy.js` config consists of which directory should it be watching files from and where to compile them to. Eleventy can still run without this config but it'll use default settings. More info from the [docs](https://www.11ty.dev/docs/config/).

## References

- [Pokemon API](https://pokeapi.co/)
- [GDS Style Guide](https://design-system.service.gov.uk/styles//)
- Eleventy (11ty)
	- [Documentation](https://www.11ty.dev/docs/)
	- [Template Languages](https://www.11ty.dev/docs/languages/)
	- [Starter Projects](https://www.11ty.dev/docs/starter/)