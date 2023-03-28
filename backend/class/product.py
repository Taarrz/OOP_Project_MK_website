class Category_Menu():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        self.product = []
    
    def add_product(self, product):
        self.product.append(product)

class Product():
    def __init__(self, name, image_url, price, description, calories, category):
        self.name = name
        self.image_url = image_url
        self.price = price
        self.description = description
        self.calories = calories
        self.category = category
    
    def add_product_option(self, option_product):
        self.option_production.append(option_product)

    def __str__(self):
        return ""

class Product_Option():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url

class Cart_item():
    def __init__(self,product,quantity):
        self.product = product
        self.quantity = quantity

class Cart():
    def __init__(self):
        self.cart_item = []
        self.total_cost = 0
        self.shipping_cost = 0
    
    def add_cart_item(self, cart_item):
        self.cart_item.append(cart_item)
        self.calculate_cost()

    def calculate_cost(self):
        for item in  self.cart_item:
            self.total_cost += item.product.price * item.quantity

    def show_cart(self):
        for i in self.cart_item:
            print('[Name : ' + i.product.name + ', Price : ' +  str(i.product.price) + ', Quantity : ' + str(i.quantity) + '],')