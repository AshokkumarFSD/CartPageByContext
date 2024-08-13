# Cart page using context for quantity updates and remove option.

Cart page created.

Each item in the list will show the product with name,image,description,details, price and subtotal.

Each item have the option to increase, decrease the quanity and remove item option.

Sub total displayed at the bottom of the list.

Any changes occuring any item of the list, will get update the sub total using context.

-----
#Implementation:
-----

Appcontext jsx file created.

Using createContext Cart component wrapped in AppCxt.Provider.

The root app.jsx changed to   <AppContext></AppContext>.

Where ever access the update the products done using const  useContext(AppCxt)


