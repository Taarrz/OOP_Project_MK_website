class Category_Menu():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url

class Product():
    def __init__(self, name, image_url, price, description, calories, category, option_product):
        self.name = name
        self.image_url = image_url
        self.price = price
        self.description = description
        self.calories = calories
        self.category = category
        self.option_product = option_product

class Product_Option():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        