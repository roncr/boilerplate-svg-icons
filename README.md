#SVG-Icons Boilerplate

This is just an experiment/boilerplate code to use SVG icons (aiming to replace the font icons).

## Why SVG Icons?

There are a couple of reasons to use SVG icons instead of font icons, this reasons are explained in [Inline SVG vs Icon Fonts [CAGEMATCH]](https://css-tricks.com/icon-fonts-vs-svg/), short version of the benefits of SVG:
* Multi-color icons (if using embedded icons) or at least icons having paths at different opacity.
* Avoid having spacing issues, with font-icons the box wrapping the icon does not always fits to the icon itself.
* Icon fonts have always been a hack.

## SVG Icons Flavor

In this boilerplate we are using [SVG Symbol Sprite](https://css-tricks.com/svg-use-with-external-reference-take-2) and the reasons are better explained by Una Kravets in [A Gulp-Based External SVG Symbol Sprite Icon System](https://una.im/svg-icons/#) post:
* Eliminate HTTP requests (with this singular asset)
* Create and use a cacheable asset
* Faster page load time because all of the above
* Provide a "Single Source of Truth" to reference and link to
* SVG properties are editable in CSS
* SVG is animatable in CSS or JS

## Implementation

Must of the magic in here happens thanks to the [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) tool. This Gulp plugin takes all the SVGs in a folder and creates a unified SVG (sprite) that can be loaded into the HTML document. The configuration of the tool goes like:

    // SVG Config
    var config = {
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: false, // CSS output option for icon sizing
            scss: false // SCSS output option for icon sizing
          },
          dest: 'icons', // destination folder
          prefix: '.svg-%s',
          sprite: 'sprite.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      }
    };

The output will be 1 single SVG document that contains inside all the icons in the shape of:

    <svg width="0" height="0" style="position:absolute">
    	<symbol viewBox="0 0 32 32" id="cloud-check"><path d="..."></path></symbol>
    	<symbol viewBox="0 0 32 32" id="database"><path d="..."></path></symbol>
    	<symbol viewBox="0 0 32 32" id="git"><path d="..."></path></symbol>
    	...
    </svg>

## Usage

### External file
The path to the SVG sprite file is directly set in the `use`:
 
     <svg>
         <use xlink:href="dist/icons/sprite.svg#cloud-check"></use>
     </svg>
     
### Ajaxing external file
In this situation we need a little bit of JavaScript help, but the SVG sprite doesn't have to be set in the `use`:

    <svg>
        <use xlink:href="#leaf"></use>
    </svg>

### Changing color
This is a simple as using the `fill` property:

    <svg style="fill: #F94C16">
        <use xlink:href="#git"></use>
    </svg>
    
### Icons with different opacity
The paths inside an icon can have different opacity with `fill-opacity`, however this opacity cannot be changed in runtime. The only way to change it in runtime and/or changing the color of the internal paths of the icon is using [inline-svg](https://css-tricks.com/using-svg/#article-header-id-7)