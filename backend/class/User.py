import order as orders
import payment as payments

class MkDelivery():
    def __init__(self):
        self.__user_list = []
        self.__product_list = []

    def add_user(self, user):
        self.__user_list.append(user)

    def add_product(self, product):
        self.__product_list.append(product)

    def list_product(self):
        for i in self.__product_list:
            print(i.__dict__)

    def search_product(self,keyword):
        product_search = []
        for i in self.__product_list:
            if keyword in i.name:
                product_search.append(i)
        for i in product_search:
            print(i.__dict__)

class Addmin:
    def __init__(self, Id, Name, Email):
        self._Id = Id
        self._Name = Name
        self._Email = Email


class User:
    def __init__(self, Id, Password):
        self._Id = Id
        self._Password = Password
        self._Status = "Online"

class Account:
    def __init__(self, Id, Email, Shipping_Address, Phone):
        self._Id = Id
        self._Email = Email
        self._Shipping_Address = Shipping_Address
        self._Phone = Phone 

    def create_order(self, cart):
        order = orders.Order(cart.total_cost,"PENDIN","UNPAID",self)
        return order
    
    def make_payment(self, date_time, order):
        payment = payments.payment("PENDING",date_time,"001",order)
        return payment