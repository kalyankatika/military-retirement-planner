
# Military Retirement Planner

This repository contains a prototype for a military retirement planner dashboard. The dashboard is designed to help military personnel plan for their retirement by providing tools for calculating benefits, tracking expenses, managing debt, and setting financial goals.

## Features

- Retirement calculator
- Benefits information
- Spending tracker
- Debt management
- Employment information
- Financial goal setting

## Technology Stack

- Flask (Python web framework)
- JavaScript (Chart.js for data visualization)
- HTML/CSS (with Tailwind CSS for styling)

## Setup Instructions

### Dynamic Flask Application

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/military-retirement-planner.git
   cd military-retirement-planner
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root directory
   - Add the following variables:
     ```
     FLASK_APP=main.py
     FLASK_ENV=development
     ```

4. Run the Flask application:
   ```
   flask run
   ```

5. Open your web browser and navigate to `http://localhost:5000` to view the application.

### Static Site Variant

1. Navigate to the project directory:
   ```
   cd military-retirement-planner
   ```

2. Run the static site server:
   ```
   python serve_static_site.py
   ```

3. Open your web browser and navigate to `http://localhost:8000` to view the static site.

## Development

This project is currently a prototype and is under active development. Contributions are welcome!

To contribute:
1. Fork the repository
2. Create a new branch for your feature
3. Make your changes and commit them
4. Push to your fork and submit a pull request

Please ensure that your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
    