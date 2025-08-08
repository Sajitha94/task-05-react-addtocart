# 🛍 Niha Luxe Shop – React Cart App    

**Live Demo:** [Click Here](https://task-05-reactaddtocart.netlify.app/)

This is a React + Tailwind CSS shopping cart app for **Niha Luxe**, where users can:
- View products from the Fake Store API
- Add products to the cart
- Remove products from the cart
- See the cart in a modal

---



## 📂 Project File Explanation

- Main component of the app.
- Fetches products from the **Fake Store API**.
- Stores the **cart state** and passes it to child components.

###  `Header.jsx`

- Displays the **Niha Luxe** logo and **Cart Icon**.
- Shows a **badge** with the number of items in the cart.
- Clicking the cart icon opens the **Cart Modal**.
- Badge only appears if `count > 0`.

### `ProductList.jsx`

- Receives the product list via props.
- Displays product image, title, and price.
- Includes an **"Add to Cart" button**:
  - If the product is already in the cart → shows alert `"Item already in the cart"`.
  - Else → adds the product to the cart.

  ###  `CartModal.jsx`
- Opens when you click the **Cart Icon** in the header.
- Lists all products currently in the cart.
- Shows:
  - Product image
  - Title
  - Price
  - **Remove from Cart** button → removes the selected product immediately.
- Closes when you click the "X" or outside the modal.
- Calculate total cart count.

### 2️⃣ Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/Sajitha94/task-05-react-addtocart

