# Shopping Cart
## Index

- [Introduction](#introduction)
- [Project description](#project-description)
- [Front End](#front-end)
  - [User definition](#user-definition)
  - [User stories](#user-stories)
  - [Low fidelity Prototype](#low-fidelity-prototype)
- [Back End](#back-end)

## Introduction
This project is develop by **Gloria Ramirez Robles** as her first project with Full Stack Developer responsibilities.
There is no time allocated for this project, so it will be constantly iterated.

## Project description
#### Main description: 
Create a shopping cart website similar to Amazon where the user can sort and filter products, add them to a cart and pay for the total of the products.

#### Requirements:

- Dashboard should have 20 items listed from different categories
- Each product item should have name, image, price and category
- User can sort products by: 
  - Price
  - Name
- User can filter products by:
  - Product type or category – Such as kids, men, women
  - Price – between 100 USD to 500 USD
- Each product should have 'Add to cart' button
- On right side top of the website there should be a checkout button
- When user clicks 'checkout' button a dialog box should appears which has all items added to cart
- Display total to pay of all items in the cart
- 'Make payment' button at bottom of the dialog box
- 'Your purchase was successful' message appears and cart is now empty

#### Extras
- Delete an item from cart
- Add more quantity from an specific item
- Save the purchase with an specific number/ID and visualize all items in that order if you search it

#### Tech Stack
-	Front End – Angular or Vue.js
-	Back End – Node JS or Spring Boot

## Front End
Vue.js will be used.

### User definition
The user needs a website where to make online shopping, visualize, sort and filter the available items, add an specific item to the cart and visualize all items in the cart with one click. If all items are correct, the user finishes the order and make payment.

### User stories
#### User Story 1
The user needs a website where to make online shopping and visualize all items available.

**DoD**
- Add API/Database to project
- Create interface
- Show all the items available

#### User Story 2
The user needs to sort the items by name or price.

**DoD**
- Select sort to apply to items
- Visualize items sorted as required

#### User Story 3
The user needs to filter the items by category of price(between 100 USD to 500 USD).

**DoD**
- Select filter to apply to items
- Visualize items filtered as required

#### User Story 4
The user needs to add an specific item to the cart.

**DoD**
- 'Add to cart' button
- Functionality to add the item to the cart

#### User Story 5
The user needs to visualize all items added to cart.

**DoD**
- 'Checkout' button
- Functionality to display dialog box with all items added to cart

#### User Story 6
The user needs to finish the order, make payment and know if it was done correctly.

**DoD**
- 'Make payment' button
- 'Your purchase was successful' message appears when user finishes the order
- Cart is empty when order is done

#### User Story 7
The user needs to delete an item or add more quantity from an specific item before finish the order.

**DoD**
- 'Delete' button
- Functionality to delete an item
- 'Add' button
- Functionality to add more quantity from an item

#### User Story 8
The user needs to know what items are in an specific purchase/order

**DoD**
- Functionality to save the order with an specific number/ID
- Visualize all items in that order if you search it

## Low fidelity Prototype

## Back End
Node.js with Express will be used to make the REST API calls.

#### Checklist
* [ ] Create database(with JSON, MongoDB,My JSON Server)
