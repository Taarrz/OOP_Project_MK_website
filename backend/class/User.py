import product
class Account:
    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password

class User:
    def __init__(self, name, phone, email, password):
        self.name = name
        self.phone = phone
        self.email = email
        self.password = password
        self.cart = product.Cart()

    def create_cart_item(self, product, quantity):
        cart_item = product.Cart()
        self.cart.add_cart_item(cart_item)

    def showcart(self):
        print(self.cart.__dict__)
