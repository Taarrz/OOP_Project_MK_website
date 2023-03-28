class Addmin:
    def __init__(self, Id, Name, Email):
        self._Id = Id
        self._Name = Name
        self._Email = Email


class Cart_item():
    def __init__(self,product,quantity):
        self.product = product
        self.quantity = quantity


class Cart():
    def __init__(self):
        self.cart_item = []
        self.total_cost = 0
        self.shipping_cost = 0
    
    def add_cart_item(self,cart_item):
        self.cart_item.append(cart_item)

    def calculate_cost(self):
        pass

    def show_cart(self):
        for i in self.cart_item:
            print('[Name : ' + i.product.name + ', Price : ' +  str(i.product.price) + ', Quantity : ' + str(i.quantity) + '],')