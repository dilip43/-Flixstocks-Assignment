# Flixstocks-Assignment
Grocery Store Backend

Tech Stack: Node, Express, Mongo <br/>
<br/>
Candidates need to create a simple backend for a Grocery store. This will be a complete node
application with routes, controllers and models.
Tasks:
● Create Database to hold Customer Details, Customer’s Order, Products Details.(Note:
Create DB on local to test APIs)
○ Customer Details must include the following fields
■ Email <br/>
■ Phone <br/>
■ Name <br/>
○ Customer Order must include the following fields
■ productList
■ totalPrice
■ paymentInfo
● Type

○ Product Details must include the following fields
■ productCategory
■ productInfo
■ price
■ quantityAvailable

● Use npm package Mongoose to interact with Mongo.
● Create Schema for each collection
○ Use virtuals to populate data from other collections
○ Add options for required and unique fields
● Rest APIs:
○ Api to fetch Customers list
○ Api to fetch specific Customer Orders list
○ Api to fetch customer Details with maximum Orders in an year
○ Api to create new Customer
○ Api to create new Product
○ API to update Product Price
● Check for invalid inputs and return appropriate status code in response
