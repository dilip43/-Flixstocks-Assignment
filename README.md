#Grocery Store Backend

<h2>Tech Stack: Node, Express, Mongo</h2>
  
<p>Candidates need to create a simple backend for a Grocery store. This will be a complete node
application with routes, controllers and models.</p>
  
<h3>Tasks:</h3>
<ul>
  <li>Create Database to hold Customer Details, Customer’s Order, Products Details.(Note:
    Create DB on local to test APIs)
    <ul>
      <li>Customer Details must include the following fields
        <ol>
          <li>Email</li>
          <li>Phone</li>
          <li>Name</li>
        </ol>
      </li>
      <li>Customer Order must include the following fields
        <ol>
          <li>productList</li>
          <li>totalPrice</li>
          <li>paymentInfo</li>
          <li>Type</li>
        </ol>
      </li>
      <li>Product Details must include the following fields
         <ol>
          <li>productCategory</li>
          <li>productInfo</li>
          <li>price</li>
          <li>quantityAvailable</li>
        </ol>
      </li>
      </ul>
  </li>
  <li>
    Use npm package Mongoose to interact with Mongo.
  </li>
  <li>Create Schema for each collection
  <ol>
    <li>Use virtuals to populate data from other collections</li>
    <li>Add options for required and unique fields</li>
    </ol>
  </li>
  <li>Rest APIs:
    <ol>
          <li>Api to fetch Customers list</li>
          <li>Api to fetch specific Customer Orders list</li>
          <li>Api to fetch customer Details with maximum Orders in an year</li>
          <li>Api to create new Customer</li>
          <li>Api to create new Product</li>
          <li>API to update Product Price</li>
        </ol>
  </li>
  <li>Check for invalid inputs and return appropriate status code in response</li>
  </ul>

