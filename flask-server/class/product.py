class Category_Menu():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        self.product = []
    
    def add_product(self, product):
        self.product.append(product)

class Product():
    def __init__(self, name, image_url, price, description, calories, category, filter):
        self.name = name
        self.image_url = image_url
        self.price = price
        self.description = description
        self.calories = calories
        self.category = category
        self.filter = filter
        self.option_product = []
    
    def add_product_option(self, option_product):
        self.option_production.append(option_product)

class Product_Option():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        