# UnitXpert - Smart Unit Converter 🚀

A modern, responsive web application for converting units across multiple categories with support for 5 Indian languages and dark/light themes.

## 🌟 Features

- **Multi-Category Conversion**: Length, Weight, Temperature, Volume, Speed, and Area
- **Multi-Language Support**: English, Hindi, Bengali, Tamil, and Kannada
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Real-time Conversion**: Instant results as you type
- **Conversion History**: Track your recent conversions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Built with ARIA labels and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start converting units instantly!

### Local Development
```bash
# Simply open the file in your browser
# Or serve via a local server for development
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📱 Usage

1. **Select Conversion Type**: Choose from Length, Weight, Temperature, etc.
2. **Enter Value**: Input the number you want to convert
3. **Choose Units**: Select 'From' and 'To' units from dropdown menus
4. **Get Results**: View instant conversion results
5. **Swap Units**: Use the swap button to quickly reverse units
6. **Change Language**: Switch between 5 supported languages
7. **Toggle Theme**: Switch between light and dark modes

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with responsive design
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **Font Awesome**: Icons for better UI
- **Google Fonts**: Typography for readability

### File Structure
```
Unit converter/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

### Key Functions
- `convert()`: Performs unit conversion calculations
- `populateUnits()`: Dynamically populates unit dropdowns
- `updateLabels()`: Handles language switching
- `addToHistory()`: Manages conversion history

## 🌍 Supported Languages

| Language | Code | Native Name |
|----------|------|-------------|
| English  | en   | English     |
| Hindi    | hi   | हिन्दी       |
| Bengali  | bn   | বাংলা       |
| Tamil    | ta   | தமிழ்       |
| Kannada  | kn   | ಕನ್ನಡ        |

## 📊 Conversion Categories

| Category | Units Available |
|----------|-----------------|
| **Length** | meters, feet, kilometers, miles |
| **Weight** | kilograms, pounds, grams, ounces |
| **Temperature** | Celsius, Fahrenheit, Kelvin |
| **Volume** | liters, milliliters, gallons, cups |
| **Speed** | m/s, km/h, mph |
| **Area** | sq meters, sq kilometers, sq feet, sq miles |

## 🎨 Customization

### Adding New Languages
1. Add language labels in `labels` object in `script.js`
2. Update language dropdown in `index.html`
3. Follow the existing pattern for translations

### Adding New Units
1. Add units to `unitOptions` object
2. Add conversion formulas to `conversions` object
3. Ensure consistent naming across the application

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add new languages or units
- Improve accessibility
- Enhance styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Community feedback and suggestions

---

**Made with ❤️ for the global community**
