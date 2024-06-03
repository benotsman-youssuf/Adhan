# Adhan and Hisnul Muslim

This project is a web application that provides prayer times for a given location and displays the contents of the popular book "Hisnul Muslim" (Fortress of the Muslim).

## Features

- **Prayer Times**: Get accurate prayer times (Fajr, Dhuhr, Asr, Maghrib, and Isha) for any city or location.
- **Hisnul Muslim**: Browse through the chapters and hadiths of the Hisnul Muslim book.
- **Responsive Design**: The application is fully responsive and optimized for various screen sizes, including mobile devices.
- **Real-Time Clock**: The application displays the current time for the selected location.
- **Adhan Background Animation**: The background image and gradient change based on the current prayer time, creating a visually appealing and immersive experience.
- **User-Friendly Interface**: The application features a clean and intuitive user interface, making it easy to navigate and use.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Aladhan API (for fetching prayer times)
- OpenStreetMap Nominatim API (for geocoding locations)

## Installation

1. Clone the repository or download the source code.
2. Open the project directory in your preferred code editor.
3. No further installation is required as it's a static web application.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter a city or location name in the search bar and click the search button.
3. The application will display the prayer times for the entered location.
4. Click on the chapter titles in the "Hisnul Muslim" section to view the hadiths.
5. On smaller screens, a "Return" button will appear in the hadith section, allowing you to navigate back to the chapter list.

## API Integration

This project integrates with the following APIs:

- **Aladhan API**: Used to fetch prayer times based on the provided location and date.
- **OpenStreetMap Nominatim API**: Used for geocoding the entered location to obtain latitude and longitude coordinates.

## Customization

You can customize the application by modifying the CSS styles in the `style.css` file and adjusting the JavaScript code in the `script.js` and `hisn.js` files as per your requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Aladhan API](https://aladhan.com/prayer-times-api) for providing prayer time calculations.
- [OpenStreetMap Nominatim API](https://nominatim.org/) for geocoding services.
- [Font Awesome](https://fontawesome.com/) for the icons used in the application.