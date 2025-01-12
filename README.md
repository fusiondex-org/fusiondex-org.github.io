# FusionDex Graphics Processing

**FusionDex Graphics Processing** is the official graphics management system by [fusiondex-org](https://github.com/fusiondex-org). It provides a powerful script, `script.js`, designed to manage, render, and load Pokémon Infinite Fusion graphics in the DOM. This tool enables users to easily display and handle Pokémon sprites from spritesheets.

## Features
- Efficient rendering of Pokémon sprites directly into web pages
- Seamless integration with Pokémon Infinite Fusion spritesheets
- Utility functions to manage sprite loading and rendering in the browser
- Optimized performance for handling large sprite collections
- Built-in error handling for missing or invalid sprites

## Getting Started
### Installation
You can include `script.js` in your project directly from our hosted version:

```html
<script src="https://fusiondex-org.github.io/script.js"></script>
```

### Usage
Import the script into your project and use its methods to manage Pokémon graphics. Here is an example of how to render a sprite:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FusionDex Sprite Renderer</title>
    <script src="https://fusiondex-org.github.io/script.js"></script>
</head>
<body>
    <div id="sprite-container"></div>
    <script>
        const spriteContainer = document.getElementById('sprite-container');
        const sprite = Graphics.renderSprite('spritesheet.png', { x: 0, y: 0, width: 64, height: 64 });
        spriteContainer.appendChild(sprite);
    </script>
</body>
</html>
```

## Documentation

### Core Functions

#### renderSprite(imagePath, options)
Renders a sprite from a given spritesheet image.
```javascript
const sprite = Graphics.renderSprite(imagePath, {
    x: 0,          // X coordinate on spritesheet
    y: 0,          // Y coordinate on spritesheet
    width: 64,     // Width of sprite
    height: 64     // Height of sprite
});
```

#### loadSpriteSheet(path)
Loads a spritesheet for later use.
```javascript
await Graphics.loadSpriteSheet('path/to/spritesheet.png');
```

### Options Object
When rendering sprites, the options object supports the following properties:
- `x`: X coordinate on the spritesheet (required)
- `y`: Y coordinate on the spritesheet (required)
- `width`: Width of the sprite (required)
- `height`: Height of the sprite (required)
- `scale`: Scale factor for the sprite (optional, default: 1)
- `rotation`: Rotation in degrees (optional, default: 0)

## Contributing
We welcome contributions to improve FusionDex Graphics Processing! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to our coding standards.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links
- Project Repository: [fusiondex-org.github.io](https://github.com/fusiondex-org/fusiondex-org.github.io)
- Script URL: [script.js](https://fusiondex-org.github.io/script.js)
- Organization: [fusiondex-org](https://github.com/fusiondex-org)

## Support
If you encounter any issues or have questions, please create an issue in the GitHub repository.

---
Created and maintained by [fusiondex-org](https://github.com/fusiondex-org)
