# Live Link: https://vogue-verse.web.app/
***

<h1 align="center">Features</h1>

### **1. Home Page**
The home page is divided into 3 main sections Header, Outlets, and Footer. Header Each section also has different features. These features are briefly discussed here.

#### **I)	Header :**
This section contains 2 elements, a Navbar, and a Banner. They have also some individual features.

- ***Navbar:*** 
    - There is a logo on the left side and 2 functional buttons named 'Login' & 'Change Theme' on the right. 
    - Initially 'Login' button will show here but when the user logs in it will only show a 'logout' button.
    - Moreover, there are 3 route links named Home, Add Product, and My Cart, in the middle. 
    - Among these, the Add Product protected route and My Cart is private route.
    - Users can add products by clicking the Add Product route.  
    - The private route will show when any user logs in otherwise it will be hidden. 
    - When the user is logged in, the left side of the logout button will show the user's name and picture.

- ***Header:*** 
    - A tagline is used right in the middle of the background image and a short description with explore button is given below it.

#### **II)	Outlets :**
This section has 4 individual sub-sections ‘Why Choose’, ‘Brands’, ‘Offer’, and ‘Instagram’.

- ***'Why Choose' :***
    - It has a title at the beginning and a short description below it.
    - Then there are 4 small cards that represent the company's specialty.

- ***'Brands' :*** 
    - Here are 6 cards containing an image, and a brand title.
    - The data for each card comes dynamically from a JSON file.
    - When the user clicks on the card, the products of that particular brand will be taken to a separate page.
    - **Product Cards:** 
        - Product cards has image, name, brand, product type, rating, details button, and update button.
        - When click on the details button details of that shows in the another page; And there is a Add to Cart button where user can add products to My Cart route.
        - When clicking update button user will go to another page to update the product.

- ***'Offer' :*** 
    - It has also a title at the beginning and a short description below it.
    - Here are 4 products with discount details.

- ***'Instagram' :***
    - Here 4 images with instagram logo. When hover over the image the logo will be highlighted.

#### **III)	Footer :**
Here are some links that will take the user to specific routes if clicked. Along with logo and copyright information provided. 

### **2.	Register**
- ***Input Fields :*** 
    - **Name:** Allows users to enter their full name.
    - **Email:** Collects user email for communication and login.
    - **Photo URL:** Option for users to link their profile picture.

- ***Password and Validation :*** 
    - **Password:** Secure input field for users to create a password.
    - **Password Validation:** Ensures users enter the password correctly by requiring a confirmation entry. At least 6 characters long, Minimum 1 uppercase letter, Minimum 1 number, Minimum 1 special character.

- ***Sweet Alerts :*** 
    - **Error Alert:** Displays a sweet alert with clear messages if there are issues during registration, such as incomplete fields or invalid data.
    - **Success Alert:** Shows a congratulatory sweet alert upon successful registration, providing a positive and reassuring message. 

### **3.	Login :**
- **Email and Password Fields:** Input fields for users to enter their email and password.
- **Eye Icon for Password Visibility:** Toggle icon to show/hide the entered password for user convenience. 
- **Login Button:** Clearly labeled button to initiate the login process.
- **Google Login:** Integration with Google popup for quick login options.
- **Error Handling:** Instant feedback on login errors with clear sweet alert messages. Highlighting of specific fields causing login issues. 
- **Logged In Greetings:** Trigger a sweet alert with a congratulatory message upon successful login. 
- **Redirects:** Automatic redirection to a secure page upon successful login.

## **Other Features :**

- **Responsiveness:** Adapted the layout and content dynamically for desktops, tablets, and mobile devices.
- **Dark Mood:** Provided functionality to change theme between dark and light. Toggle button for it is appeared on the navbar.